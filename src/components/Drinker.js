import React, { Component } from 'react';
import ColourPicker from "./ColourPicker"

class Drinker extends Component {
  state = {
    colourPickerActive: false
  }

  handleColourPickerShow = () => {
    this.setState( prevState => {
      return {
        colourPickerActive: true
      }
    });
  }

  // Passed down to the ColourPicker so that it can hide itself
  handleColourPickerHide = () => {
    this.setState( prevState => {
      return {
        colourPickerActive: false
      }
    });
  }


  render() {
    // Get props
    const {
      name,
      drink,
      colourHex,
      mugshot,
      updateColour,
      index
    } = this.props;

    // Decide whether to show the colour picker or not
    let colourPicker;

    if (this.state.colourPickerActive) {
      colourPicker = <ColourPicker updateColour = { updateColour } index = { index } colourPickerHide = { this.handleColourPickerHide } />
    } else {
      colourPicker = <button onClick={ this.handleColourPickerShow } className="show-colour-picker">Pick new colour</button>
    }

    // Aaand render the damn thing
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
          { colourPicker }

        </div>
      </li>
    );
  }
}

export default Drinker;
