import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="weather-form">
        <input placeholder="city, state" name="city"/>
        <button className="weather-form-button">Get Weather</button>
      </form>
    );
  }
}

export default Form;
