import React, { Component } from 'react';
var queryString = require("query-string");
var api = require("../utils/api");
var Loading = require("./Loading");
var moment = require("moment");
import { browserHistory } from 'react-router'

class WeatherDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: null,
      loading: true
    }

    this.showDetail = this.showDetail.bind(this);
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

  showDetail(event) {
    var selectedDay = this.state.days[event.target.id];
    console.log(selectedDay);
    browserHistory.push("/detail");
  }

    render() {
      var days = this.state.days;

      return (
        <div className="weather-box">

        {days === null ? console.log("no day yet") :
        days.map(function(day, index) {
          return (
            <div id={index} onClick={this.showDetail} key={index} className="info">
              <p className="date">{moment.unix(day.dt).format("dddd, MMMM Do")}</p>
                            <img className="weather-icon" src={"app/images/weather-icons/" + day.weather[0].icon + ".svg"}/>
              <p className="condition">{day.weather[0].description}</p>

            </div>
          )
        }.bind(this))
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
        {days === null ? <Loading/> : <WeatherDetail days={days}/>}
      </div>
    );
  }
}

module.exports = ForecastList;
