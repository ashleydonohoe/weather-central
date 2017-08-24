import React, { Component } from 'react';
var queryString = require("query-string");
var api = require("../utils/api");

class Forecast extends Component {
  constructor(props) {
      super(props);

      var location = queryString.parse(this.props.location.search);
      var city = location.city;

      this.state = {
        locationName: city,
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

        this.setState(function() {
          return {
            locationName: city,
            error: null,
            fiveDayForecastData: results,
            loading: false
          }
        });
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="forecast">
        <h1>Forecast</h1>
        {this.state.locationName}
        {console.log(this.state.fiveDayForecastData)}
      </div>
    );
  }
}

export default Forecast;
