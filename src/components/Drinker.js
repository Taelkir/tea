import React, { Component } from 'react';
import ColourPicker from "./ColourPicker"

class Drinker extends Component {


  render() {

    const {
      name,
      drink,
      colourHex,
      mugshot,
      updateColour,
      index
    } = this.props;

    return (
      <li className="drinker-grid">

        <img
          className="drinker-image"
          src = { mugshot }
          alt = { name }/>

        <p
          className="drinker-info">
          {drink.charAt(0).toUpperCase() + drink.slice(1)}</p>

        <div
          className="drinker-colour"
          style={{backgroundColor: colourHex}}>
          <ColourPicker
            updateColour = { updateColour }
            index = { index }

          />
        </div>
      </li>
    );
  }
}

export default Drinker;
