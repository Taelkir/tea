import React, { Component } from 'react';
import '../styles/App.scss';
import Header from "./Header";
import DrinkerList from "./DrinkerList";

class App extends Component {

  // If this state is ever visible, something has gone wrong.
  state = {
    drinkers: [
      {
        name: "??",
        drink: "??",
        colourHex: "#000",
        imageSrc: "https://placeimg.com/128/128/people",
      }
    ]
  };

  // Once the App component is ready to go, get the application state from the API
  componentDidMount() {

    fetch('/demo-state.json')
      .then(response => {
        // Check if the response succeeded
        if(response.ok) {
          return response.json();
        } else {
          // If not, throw an error and .catch it later
          throw new Error("Fetch operation failed");
        }
      })
      .then(drinkers => {
        // Load the data into state if successful
        this.setState({ drinkers, stateLoadSuccess: true });
      })
      .catch(error => {
        // For now, log the error to the console and load the default state
        console.error(`Loading state from API failed. Full error details:`);
        console.error(error);
        this.setState({ stateLoadSuccess : false });
      });
  }


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
