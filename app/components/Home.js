import React, { Component } from 'react';
import Form from "./Form";

class Home extends Component {
  constructor(props) {
      super(props);

      this.state = {
        locationName: "",
        locationData: null
      };

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(locationName) {
    var locationData;

    this.setState(function() {
      var newState = {};
      newState.locationName = locationName;

      // TODO: Write API call to get the data for the location's weather
      newState.locationData = locationData;
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Enter a City and State</h1>
        <Form onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Home;
