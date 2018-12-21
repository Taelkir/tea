import React, { Component } from 'react';
import tea from '../tea.svg';

class Header extends Component {
  render() {

    const { numOfStaff } = this.props;

    return (
        <header className="App-header">
          <img src={tea} className="App-logo" alt="logo" />
          <small>Now serving {numOfStaff} hot drinks</small>
          <h1>Tea</h1>
        </header>
    );
  }
}

export default Header;
