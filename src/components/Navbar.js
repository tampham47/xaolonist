import React from 'react';

const Navbar = class extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          Xalonist
        </div>
      </nav>
    );
  }
};

export default Navbar;
