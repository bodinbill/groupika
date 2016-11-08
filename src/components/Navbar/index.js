import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-header">
          <img src={logo} className="Navbar-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
