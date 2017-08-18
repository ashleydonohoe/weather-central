import React, { Component } from 'react';
var PropTypes = require("prop-types");

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
    return (
      <form className="weather-form" onSubmit={this.handleSubmit} value={this.state.locationName}>
        <input placeholder="city, state" name="city" onChange={this.handleChange}/>
        <button type="submit" className="weather-form-button">Get Weather</button>
      </form>
    );
  }
}

export default Form;
