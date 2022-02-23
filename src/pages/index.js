import React from 'react';

import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import HeaderFull from '../components/HeaderFull';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HeaderFull />
        <section>
          <div className="container">
            <h2>Suy nghĩ của ảnh</h2>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
