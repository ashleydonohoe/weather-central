import React, { Component } from 'react';
var PropTypes = require("prop-types");
var Link = require("react-router-dom").Link;
var Forecast = require("./Forecast");

class Form extends Component {
  constructor(props) {
      super(props);

      this.state = {
        locationName: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var locationValue = event.target.value;

    this.setState(function() {
      return {
        locationName: locationValue
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.locationName);
  }

  render() {
    var locationName = this.state.locationName;
    var match = this.props.match;
    return (
      <form className="weather-form" onSubmit={this.handleSubmit} value={this.state.locationName}>
        <input placeholder="city, state" name="city" onChange={this.handleChange}/>
        <Link className='weather-form-button' to={{pathname: "" + '/forecast',
search: '?city=' + locationName}}>Get Weather</Link>
      </form>
    );
  }
}

export default Form;
