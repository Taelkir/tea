import React, { Component } from 'react';

class ColourPicker extends Component {
  render () {

    const {
      updateColour,
      colourPickerHide,
      index
    } = this.props;


    let drinkerColourInput = React.createRef();

    let handleNewColour = (e) => {
      e.preventDefault();
      updateColour(drinkerColourInput.current.value, index);
      colourPickerHide();
      e.currentTarget.reset();
    }

    return (
      <form
      className="change-colour-form"
      onSubmit={ handleNewColour }>
      <input
      ref={ drinkerColourInput }
      autoFocus // moves the cursor into the input when it renders
      type="text"
      placeholder="e.g. #f8f8f8" />
      <button type="submit">Change Colour</button>
      </form>
    );
  }
}

export default ColourPicker;
