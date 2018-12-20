import React, { Component } from 'react';
import Drinker from "./Drinker";

class DrinkerList extends Component {


  render() {

    const { drinkers } = this.props;

    return (
        <main>
          <ul>
            {drinkers.map( (drinker, index) =>
              <Drinker
                name = { drinker.name }
                drink = { drinker.drink }
                colourHex = { drinker.colourHex }
                mugshot = {drinker.imageSrc }
                id = { drinker.id }
                key = { drinker.id.toString() }
                index = { index }
              />
            )}
          </ul>
        </main>
    );
  }
}

export default DrinkerList;
