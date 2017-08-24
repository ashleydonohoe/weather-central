import React, { Component } from 'react';
import Form from "./Form";
var api = require("../utils/api");

class Nav extends Component {
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
      <header className="nav">
        <h2>Weather Central</h2>
        <Form onSubmit={this.handleSubmit}/>
      </header>
    );
  }
}

export default Nav;
