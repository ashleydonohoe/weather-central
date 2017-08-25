import React, { Component } from 'react';
var queryString = require("query-string");
var api = require("../utils/api");
var Loading = require("./Loading");
var moment = require("moment");

class WeatherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: null,
      loading: true
    }
  }

  componentDidMount() {
      var days= this.props.days;

      if(days === null) {
        return this.setState(function() {
          return {
            error: "No days found",
            loading: false
          }
        })
      }
    this.setState(function() {
       return {
           error: null,
           loading: false,
           days: days
       }
    });
  }

    render() {
      var days = this.state.days;

      return (
        <div className="weather-box">

        {days === null ? console.log("no day yet") :
        days.map(function(day) {
          return (
            <div className="info">
              <p>{moment.unix(day.dt).format("dddd, MMMM Do")}</p>
              <p>{day.weather[0].description}</p>
            </div>
          )
        })
    }
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
        {days === null ? <Loading/> : <WeatherDetail days={days}/>}
      </div>
    );
  }
}

module.exports = ForecastList;
