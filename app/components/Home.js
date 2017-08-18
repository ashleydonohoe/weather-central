import React, { Component } from 'react';
import Form from "./Form";
var api = require("../utils/api");

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
    api.fetchCurrentWeather(locationName).then(function(forecast) {
      console.log(forecast);
      this.setState(function() {
        return {
          locationName: locationName,
          locationData: forecast
        }
      });
    }.bind(this));

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
