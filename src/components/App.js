import React, { Component } from 'react';
import '../styles/App.scss';
import Header from "./Header";
import DrinkerList from "./DrinkerList";

class App extends Component {
  state = {
    drinkers: [
      {
        name: "Tom",
        drink: "tea",
        colourHex: "#BC7B3B",
        imageSrc: "https://media.alliescomputing.com/media/staff/tom.jpg",
        id: 1
      },
      {
        name: "Jacob",
        drink: "coffee",
        colourHex: "#826857",
        imageSrc: "https://media.alliescomputing.com/media/staff/jacob.jpg",
        id: 2
      },
      {
        name: "James",
        drink: "tea",
        colourHex: "#f9d79f",
        imageSrc: "https://media.alliescomputing.com/media/staff/james_fox.jpg",
        id: 3
      },
      {
        name: "Garrie",
        drink: "tea",
        colourHex: "#44190B",
        imageSrc: "https://media.alliescomputing.com/media/staff/garrie.jpg",
        id: 4
      },
      {
        name: "Adam",
        drink: "coffee",
        colourHex: "#c66b57",
        imageSrc: "https://media.alliescomputing.com/media/staff/adam.jpg",
        id: 5
      },
      {
        name: "Sarah",
        drink: "Fruit Tea",
        colourHex: "#C71585",
        imageSrc: "https://media.alliescomputing.com/media/staff/sarah.jpg",
        id: 6
      }

    ]
  };

  // Is passed info up from the drinker component when the form inside it is submitted
  handleUpdateColour = (newColour, index) => {
    this.setState( prevState => {
      return {
        newestColour: prevState.drinkers[index].colourHex = newColour
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          numOfStaff = { this.state.drinkers.length }
        />
        <DrinkerList
          drinkers = { this.state.drinkers }
          updateColour = { this.handleUpdateColour }
        />
      </div>
    );
  }
}

export default App;
