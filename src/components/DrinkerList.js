import React, { Component } from 'react';
import Drinker from "./Drinker";

class DrinkerList extends Component {


  render() {

    const { drinkers, updateColour } = this.props;

    return (
        <main>
          <ul>
            {drinkers.map( (drinker, index) =>
              <Drinker
                name = { drinker.name }
                drink = { drinker.drink }
                colourHex = { drinker.colourHex }
                mugshot = { drinker.imageSrc }
                updateColour = { updateColour }
                index = { index }
                key = { index.toString() }
              />
            )}
          </ul>
        </main>
    );
  }
}

export default DrinkerList;
