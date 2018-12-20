import React, { Component } from 'react';
import tea from '../tea.svg';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={tea} className="App-logo" alt="logo" />
          <h1>Tea</h1>
        </header>
    );
  }
}

export default Header;
