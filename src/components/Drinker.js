import React, { Component } from 'react';

class Drinker extends Component {

  render() {

    const {
      name,
      drink,
      colourHex,
      mugshot,
    } = this.props;

    const cssDrinkerColour = {
      backgroundColor: colourHex
    };

    return (
      <li className="drinker-grid">
        <img
          src = { mugshot }
          alt = { name }
          className="drinker-image"/>
        <p
          className="drinker-info">
          {drink.charAt(0).toUpperCase() + drink.slice(1)}
        </p>
        <div
          className="drinker-colour"
          style={cssDrinkerColour}>
        </div>
      </li>
    );
  }
}

export default Drinker;
