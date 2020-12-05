---
templateKey: blog-post
title: Static page — kỹ thuật bình dân
date: 2018-11-20T06:00:51.524Z
description: Mình là tư, và hôm nay mình nói chuyện về kỹ thuật bình dân.
featuredpost: true
featuredimage: /img/1_M-FXHzMTQIyuAgCzyFzR_g.png
---
Mình là tư, và hôm nay mình nói chuyện về kỹ thuật bình dân.

![kỹ thuật bình dân](/img/1_M-FXHzMTQIyuAgCzyFzR_g.png)

Đầu tiên, mình xin nói về điều mà có thể mọi người đều biết rồi, đối với lập trình frontend HTML, Javascript và CSS là 3 yếu tố cơ bản không thể tách rời. Nếu logic có giỏi, nhưng không dùng html và css một cách uyển chuyển thì cũng khó trở thành nghệ sĩ được, frontend là làm về cái đẹp mà, thiếu tính nghệ sĩ coi sao được.

Dưới đây là một vài tuyệt kỹ bình dân, bởi vì nó rất gần gũi trong lập trình web, mà đôi khi vì bình dân quá nên nhiều người không để ý, những cái mà mình tóm gọn được trong quá trình làm việc ở vị trí frontend engineer. Mong muốn chia sẻ, với hy vọng trong tương lai ít phải gặp những agency thiếu tính nghệ thuật trong việc phát triển web, hihi.

## Sử dụng semantic web để tối ưu SEO

Cái này không mới, nhưng chỉ mới đây thôi một agency của bên mình đã dùng thẻ div để present cho một đường link, thật là khủng khiếp. Semantic web là gì, coi ở đây nhé (https://www.w3.org/standards/semanticweb/).
Kiểu như trong html có rất nhiều các tag khác nhau, như (header, footer, link, aside, main, article…) mỗi thẻ có một mục đích khác nhau. Sử dụng đúng các tag một phần giúp tăng SEO, một phần giúp web dễ nhìn hơn khi không có css, một phần giúp các bạn maintain web đỡ phải suy nghĩ hơn.

## Sử dụng cấu trúc HTML tối thiểu nhất để hiển thị thông tin bạn muốn

Việc lồng cấp html quá nhiều vừa dẫn đến việc render sẽ tốn nhiều thời gian hơn, tất nhiên là mình không biết nhiều hơn thế nào rồi. Nhưng kiểu như mặc 3 lớp áo thì sẽ nực hơn mặc 1 cái quần xà lỏn rồi.

Đồng thời nó cũng dẫn đến css của mình sẽ có cấu trúc phức tạp hơn, trừ khi mình dùng styled component hay kiểu gì đấy tương tự. Nhưng có mấy ai dùng styled component cho landing page cơ chứ. Hãy cố gắng giữ cấu trúc html củ bạn tối thiểu nhất có thể nhé. React cũng có React.Fragment, mình rất thích component này của React, giúp hạn chế sinh ra những thẻ div không cần thiết, giúp cấu trúc HTML nhìn gọn hơn rất nhiều.

## Tối thiểu hóa các CSS selectors

Theo kinh nghiệm của mình, sử dụng BEM kết hợp với load css theo đúng thứ tự (source order), thì chỉ cần 1 selector với tối đa 3 class mình đã có thể handle hầu hết các trường hợp cần thiết ở trong lập trình frontend rồi.

Đồng thời nếu mình sử dụng selector phức tạp quá cũng ảnh hưởng đến tốc độ build render tree của trình duyệt, hãy giữ gìn sự trong sáng của cho lập trình frontend.

Nếu mình không hiểu rõ về source order và cascading của css (cascading style sheet), thì sẽ dẫn đến việc mình sử dụng các class vô tội vạ, dẫn đến việc khó bảo trì sau này.

## Hạn chế sử dụng #id và !important

Bạn có biết không, một selector với cả trăm class hợp sức lại với nhau thì cũng không thể nào đánh bại một id, sức mạnh của id là quá lớn. Việc dùng nó thường xuyên sẽ ảnh hưởng rất lớn đến việc maintain, và khả năng tích hợp nó với một bên khác. Kiểu như khi tích hợp trang tĩnh của bạn với 1 bên thứ 3 khác, cần phải overide một số thuộc tính trong trang tĩnh của bạn để tương thích với bên thứ 3. Bạn dùng id, việc đó trở nên khó khăn hơn bình thường. Hãy giữ specificity của các selector ở mức tối thiểu.

Nếu cả trăm cái class không overide được một cái id, thì cả trăm cái id cũng không thể nào overide được css inline. Còn important thì là bá chủ thiên hạ rồi. Làm cái đẹp cần mềm dẻo và uyển chuyển, còn important hãy cứ để các minh chủ võ lâm dùng nó đi, kaka.

## Hạn chế sử dụng các 3rd party libraries, nó lớn hơn nhu cầu của bạn nhiều ấy

Thuở mới chán ướt chân ráo bước vào lập trình frontend mình thích bootstrap lắm. Nhưng tới một ngày đẹp trời, mình nhận ra rằng bootstrap quá bự. Mình chỉ cần style một cái button thôi, chỉ cần tầm khoảng 1 dòng code, thế mà mình phải import hơn 400 dòng code vào. Mình chỉ cần phải chia layout của mình ra làm đôi, cái mình có thể làm với một vài dòng code cộng với media query nếu muốn responsive trên layout, thế mà mình cũng dùng bootstrap. Nó làm mình lười suy nghĩ quá. Mình bỏ bootstrap, cuộc đời mình đẹp hơn nhiều.

## Sử dụng Blendid để tăng tốc phát triển trang web tĩnh

Blendid là một boilerplate giúp mình bắt đầu với các trang html một cách nhanh chóng, đối với mình đây như là một `create-react-app` cho những project cần html thuần. Ở công ty mình cần phải viết một số template để tích hợp vào hubspot, mình dùng Blendid để build ra các trang tĩnh, và đưa các nội dung cần thiết lên hubspot, bằng cách này mình đã tiết kiệm được thời gian hơn rất nhiều.

## BEM methodology, thử xem thế nào

Tất nhiên BEM không mới, ngoài kia có rất rất nhiều không nghệ mới, để giải quyết vấn đề trong việc đặt tên class sao cho khỏi trùng, styled component. Nhưng nếu phải dùng dao mổ trâu để đi giết ruồi, thì còn chỗ đâu mà để phô diễn các tuyệt kỹ khi mình dùng đũa để đập ruồi được phải không. Rất nhiều khi, ở trong hoàn cảnh nào, mình biến hoá theo hoàn cảnh đấy cũng rất thú vị mà phải không. Đi với bụt mặc áo dây, đi với ma mặc áo giấy thôi phải không.

## 1 trang thì chỉ nên có 1 thẻ h1 thôi, để tối ưu cho SEO

mình chỉ mới biết gần đây thôi, 1 trang chỉ nên có một thẻ h1 thôi, và thẻ này chứa các thông tin để định vị cho toàn bộ trang web. Google thích điều này.

## When should you use which image format? JPG? PNG? SVG?

ừ, khi nào thì dùng JPG, PNG hay SVG. Mình mỏi tay quá, thôi đọc link bên dưới nhé.

Refs:
- http://cssspecificity.com
- https://github.com/vigetlabs/blendid
- https://html5boilerplate.com
- http://getbem.com
- https://clearlydecoded.com/modern-html-semantic-elements
- https://developers.google.com/speed/docs/insights/browser-reflow
- https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
- https://www.pagecloud.com/blog/web-images-png-vs-jpg-vs-gif-vs-svg
- https://int3ractive.com/secrets-of-front-end-ninja-2017
- https://link.medium.com/3bFnVvlIgR