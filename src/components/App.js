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
      },
      {
        name: "Jacob",
        drink: "coffee",
        colourHex: "#826857",
        imageSrc: "https://media.alliescomputing.com/media/staff/jacob.jpg",
      },
      {
        name: "James",
        drink: "tea",
        colourHex: "#f9d79f",
        imageSrc: "https://media.alliescomputing.com/media/staff/james_fox.jpg",
      },
      {
        name: "Garrie",
        drink: "tea",
        colourHex: "#44190B",
        imageSrc: "https://media.alliescomputing.com/media/staff/garrie.jpg",
      },
      {
        name: "Adam",
        drink: "coffee",
        colourHex: "#c66b57",
        imageSrc: "https://media.alliescomputing.com/media/staff/adam.jpg",
      },
      {
        name: "Sarah",
        drink: "Fruit Tea",
        colourHex: "#C71585",
        imageSrc: "https://media.alliescomputing.com/media/staff/sarah.jpg",
      },
      {
        name: "Rachel",
        drink: "Decaf Tea",
        colourHex: "#000000",
        imageSrc: "https://media.alliescomputing.com/media/staff/rachel.jpg",
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
