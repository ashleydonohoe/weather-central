var axios = require("axios");
var config = require("../../config");

module.exports = {
  fetchCurrentWeather: function(locationName) {
    var encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${locationName}&type=accurate&APPID=${config.API_KEY}&units=Imperial`);

    return axios.get(encodedURI).then(function(response) {
      return response.data;
    });
  },
  fetchFiveDayForecast: function(locationName) {
    var encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${locationName}&type=accurate&APPID=${config.API_KEY}&units=Imperial&cnt=5`);

    return axios.get(encodedURI).then(function(response) {
      return response.data;
    });
  }
}
