---
templateKey: blog-post
title: Xào nấu siêu ứng dụng web với lerna và yarn workspaces
date: 2019-10-16T06:00:51.524Z
description: Về tổng quan đây là một project FE lớn, được chia thành những service nhỏ hơn, được deploy chung 1 domain, và thay vì cấu trúc như Microfrontend thì mỗi service sẽ có một dedicated path.
featuredpost: true
featuredimage: /img/1_rcKYsrYYD7jGWdKLMHbe3Q.jpeg
---
![lerna và yarn workspaces](/img/1_rcKYsrYYD7jGWdKLMHbe3Q.jpeg)

Có thể các bạn đã nghe nói về thuật ngữ Micro frontend. Đây có thể là một suy nghĩ rất hay, nhưng có vẻ hơi xa thực tế ở thời điểm hiện tại. Bên dưới là bài viết ghi lại quá trình xào nấu lại các project ở Dol với mục tiêu tăng hiệu xuất cho việc lập trình.

Về tổng quan đây là một project FE lớn, được chia thành những service nhỏ hơn, được deploy chung 1 domain, và thay vì cấu trúc như Microfrontend thì mỗi service sẽ có một dedicated path.

## Lịch sử phát triển

Trước đây, vì mong muốn đưa ra sản phẩm trong thời gian ngắn, và scope ban đầu cũng khá lớn (thi trắc nghiệm online, quản lý học vụ, trang landing page…), nên Dol đã làm việc với rất nhiều freelancer ở ngay thời điểm ban đầu. Nên ở phía Frontend có rất nhiều service, mỗi service lại có một cách tiếp cận riêng, không có nhiều sự nhất quán, tất cả đã cấu thành nên một hệ sinh thái của Dol lúc này.

Sau quá trình này, về tổng quan dự án cũng đã hoàn thành, tốt có, ít tốt hơn cũng có. Nhưng vì tính chất công việc không còn gấp nữa, nên Dol bắt đầu xây dựng team in house. Lúc này có những vấn đề phát sinh như, code nằm ở nhiều repo khác nhau dẫn đến việc maintain và phát triển tính năng mới mất khá nhiều thời gian. Đồng thời vì dự án ban đầu được phát triển độc lập và song song, nên code cũng không được chia sẻ nhiều với nhau, dẫn đến sự consistency của toàn bộ dự án cũng không nhiều.

## Các vấn đề cần giải quyết

Vì resource không còn nhiều như lúc đầu, và chuẩn bị có những dự án mới, thế nên mình nghĩ đây cũng là thời điểm tốt để tối ưu dự án, trước khi bắt đầu xào nấu lại hệ thống, mình có đặt ra một số yêu cầu như:

- Làm thế nào để phát triển các tính năng mới được dễ dàng và nhanh chóng hơn.
- Làm thế nào để share code giữa các project hiện có một cách hiệu quả hơn.
- Làm thế nào để hạn chế các thay đổi lớn làm break các tính năng sẵn có.
- Làm thế nào để vẫn chia nhỏ dự án như hiện tại, giúp người mới dễ dàng tiếp cận hơn.
- Sẽ thế nào nếu mình muốn phát triển một vài tính năng với một công nghệ mới (ie: VueJS), mà vẫn không ảnh hưởng tới các project hiện tại.

Để đạt được những yêu cầu như vậy, thì mình đã đi đến một hướng giải quyết đó chính là sử dụng monorepo, với lerna và yarn workspaces.

## Bắt tay vào xào nấu

Mình nhận thấy rằng khi resource không nhiều, mà source code lại nằm ở quá nhiều repo, dẫn đến khi có bất kỳ thay đổi nào ở team product thì phải mất rất nhiều bước để hoàn thành. Đồng thời code base của dự án khá lớn, nên nếu gom hết vào một dự án thì có thể sẽ có những vấn đề phát sinh mà mình không lường trước được.

Thế nên cách tốt nhất là vẫn giữ cấu trúc của từng dự án như ban đầu, nhưng gom các dự án lại chung một repo, mỗi dự án như là một package ở trong mono repo, được quản lý bởi lerna, và powered by yarn workspaces, mình chính thức chuyển qua dùng yarn ở thời điểm này.

Đồng thời với cách tổ chức code với mono repo, mình hoàn toàn có thể tạo 1 package, `shared-components`, với mục đích là tập hợp các các component mà có thể shared chung cho các các dự án ở trong mono repo. Đồng thời `shared-components` này cũng có thể được publish lên npm, để shared với các dự án khác nằm trong eco system của Dol, những dự án mà vì lý dzo business hay kỹ thuật mà không thể nằm chung 1 repo.

Tuy các dự án nằm chung 1 repo, nhưng việc build của mỗi service vẫn diến ra độc lập, dzo đó toàn bộ logic trước đây sẽ không bị thay đổi. Nhưng bù lại ứng với mỗi service sẽ cần có một dedicated path để có thể hoạt động.

Khi thay đổi qua cách tiếp cận này, thì source code của các project ở chung mono sẽ được thường xuyên cập nhật hơn, hiệu xuất lập trình sẽ được nâng cao hơn rất nhiều, vì bạn không phải switch qua lại giữa các repo. Thay vì trước đây có những request cần thay đổi ở 5 repo thì giờ chỉ cần duy nhất 1 PR. Đồng thời sự nhất quán của dự án cũng được tăng lên rất nhiều.

## Được vs mất

Tất nhiên cách tiếp cận nào cũng sẽ có những trade-off nhất định, bên dưới là những cái được và mất sau khi chuyển qua monorepo.

### Mất

Thay vì các dự án trước đây được release một cách độc lập thì giờ sẽ phải release chung, làm tăng thời gian build, tăng effort ở phía server.

Cần có một số trick trong quá trình phát triển. Kiểu như mình sẽ có một service riêng để handle việc đăng nhập, service này sẽ được build ra và move vào trong các service khác ở quá trình develop.

### Được

Bất kỳ thay đổi nào cũng rất dễ dàng để chỉnh sửa, không tốn quá nhiều effort cho việc di chuyển giữa các repo.
Mình có cái nhìn tổng thể về dự án, nhưng cũng chia nhỏ cần thiết để người mới có thể làm quen nhanh chóng.
Hoàn toàn có thể bổ sung một service khác, được viết bằng một ngôn ngữ khác (ie VueJS) vào mono repo hiện có, mở ra một cái room lớn hơn cho dev trong tương lai.

-- 

Đây là storybook mà bên mình đang phát triển [http://bit.ly/31ncmWt](http://bit.ly/31ncmWt).

Btw, Bên mình cũng đang tuyển Frontend Engineer mọi level. Nếu bạn thấy hứng thú có thể liên lạc với mình nhé.

DOL TECH — A Leading Ed-Tech Company
