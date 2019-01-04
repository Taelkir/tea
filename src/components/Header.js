import React, { Component } from 'react';
import tea from '../tea.svg';

class Header extends Component {
  render() {

    const { numOfStaff } = this.props;

    return (
        <header className="App-header">
          <div className="App-logo">
            <img src={tea} alt="logo" />
          </div>
          <small>Now serving {numOfStaff} hot drink{numOfStaff === 1 ? "" : "s" }</small>
          <h1>Tea</h1>
        </header>
    );
  }
}

export default Header;
