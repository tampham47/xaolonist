import React from 'react';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  render() {
    return (
      <section className="container intro">
        <h1 className="xln">
          <Link to="/">
            <span>d.</span> <span className="xln_name">xaolonist</span>
          </Link>
        </h1>
        <h4>
          Who is a scientist, an anthropologist, a psychologist, a moralist... I
          am also doing Web UI on my left&nbsp;hand.
        </h4>
        <ul className="xln-info">
          <li className="info">
            <span role="img" aria-label="pineapple">
              🍍{' '}
            </span>
            <a
              href="https://www.linkedin.com/in/tam-pham-51b41192/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span>, </span>
            <a
              href="https://github.com/tampham47"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <span>, </span>
            <a
              href="https://medium.com/@xaolonist"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>
            <span>, </span>
            <a
              href="https://codepen.io/tampham47"
              target="_blank"
              rel="noopener noreferrer"
            >
              pen
            </a>
            <span>.</span>
          </li>
          <li>
            <span role="img" aria-label="mail">
              💌{' '}
            </span>
            <a href="mailto:tampham47@live.com">tampham47@live.com</a>
          </li>
          <li>
            <span role="img" aria-label="phone">
              🤙🏿{' '}
            </span>
            <a href="tel:+84343652922">+84 343-652-922</a>
          </li>
        </ul>
      </section>
    );
  }
};

export default Navbar;
