import React from 'react';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  render() {
    return (
      <section className="container intro">
        <h1 className="xln light">
          <Link to="/">d. xaolonist</Link>
        </h1>
      </section>
    );
  }
};

export default Navbar;
