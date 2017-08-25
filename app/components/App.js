import React, { Component } from 'react';
var ReactRouter = require("react-router-dom");
import Home from "./Home";
import Nav from "./Nav";
import Forecast from "./Forecast";
import ForecastDetail from "./ForecastDetail";
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/forecast" component={Forecast}/>
            <Route path="/detail" component={ForecastDetail}/>
            <Route render={function() { return <p>Not Found</p>}}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
