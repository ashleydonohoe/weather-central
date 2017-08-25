import React, { Component } from 'react';
var queryString = require("query-string");
var api = require("../utils/api");
var Loading = require("./Loading");

class WeatherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: null,
      loading: true
    }
  }

  componentDidMount() {
      var day = this.props.day;

      if(day === null) {
        return this.setState(function() {
          return {
            error: "No day found",
            loading: false
          }
        })
      }
    this.setState(function() {
       return {
           error: null,
           loading: false,
           day: day
       }
    });
  }

    render() {
      var day = this.state.day;

      return (
        <div className="weather-box">

        {day === null ? console.log("no day yet") : day.weather[0].description}
        </div>
      )
    }
  }

class ForecastList extends Component {
  constructor(props) {
      super(props);

      this.state = {
        fiveDayForecastData: null,
        error: null
      };
  }

  componentDidMount() {
    var fiveDays = this.props.days;

    if(fiveDays === null) {
        return this.setState(function() {
          return {
            error: "Looks like no forecast data was found"
          }
        });
    }

    this.setState(function() {
      return {
        error: null,
        fiveDayForecastData: fiveDays
      }
    });

    console.log(fiveDays);
  }

  render() {
    var days = this.state.fiveDayForecastData;
    return (
      <div className="forecast">
        <h1>Forecast List Here</h1>

        {days === null ? <Loading/> : <WeatherDetail day={days[0]}/>
}
      </div>
    );
  }
}

module.exports = ForecastList;
