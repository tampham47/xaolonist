import React from 'react';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="container">
        <span role="img" aria-label="cat - github">
          😽{' '}
        </span>
        <a
          href="https://github.com/tampham47"
          target="_blank"
          rel="noopener noreferrer"
        >
          xaolonist
        </a>
      </footer>
    );
  }
};

export default Footer;
