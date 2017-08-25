import React, { Component } from 'react';
var queryString = require("query-string");
var api = require("../utils/api");
var Loading = require("./Loading");
var ForecastList = require("./ForecastList");

class Forecast extends Component {
  constructor(props) {
      super(props);

      this.state = {
        locationName: null,
        fiveDayForecastData: null,
        error: null,
        loading: true
      };
  }
  componentDidMount() {
    var location = queryString.parse(this.props.location.search);
    var city = location.city;

    // Issue call to API to get 5 day forecast info
    api.fetchFiveDayForecast(city).then(function(results) {
      if(results === null) {
        return this.setState(function() {
          return {
            locationName: city,
            error: "Looks like this location doesn't exist or a network error occurred. Please try again soon.",
            loading: false
          }
        });
      }

        this.setState(function() {
          return {
            locationName: city,
            error: null,
            fiveDayForecastData: results,
            loading: false
          }
        });
    }.bind(this));
  }

  render() {
    // TODO: Make each WeatherInfo component clickable
    return (
      <div className="forecast">
        <h1 className="text-center">Five Day Forecast For {this.state.locationName}</h1>
        {this.state.fiveDayForecastData !== null ? <ForecastList days={this.state.fiveDayForecastData.list}/>: <Loading/>}
      </div>
    );
  }
}

export default Forecast;
