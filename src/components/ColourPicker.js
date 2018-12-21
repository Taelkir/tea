import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
// https://casesandberg.github.io/react-color/

class ColourPicker extends Component {
  state = {
    activeColour: "#fff",
    teaColours: ['#FFF8DC', '#FFEBCD', '#FFE4C4', '#FFDEAD', '#F5DEB3', '#DEB887', '#D2B48C', '#8B4513', '#A0522D', '#502916'],
  }
  render () {
    // Props
    const {
      updateColour,
      colourPickerHide,
      index
    } = this.props;

    // Passes the new input colours up the state
    const handleNewColour = (color, e) => {
      updateColour(color.hex, index);
      colourPickerHide();
    }

    return (
      <TwitterPicker
        colors = { this.state.teaColours }
        triangle = { "hide" }
        onChange = { handleNewColour } />
    );
  }
}

export default ColourPicker;
