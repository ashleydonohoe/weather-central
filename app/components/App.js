import React, { Component } from 'react';
var ReactRouter = require("react-router-dom");
import Home from "./Home";
import Nav from "./Nav";
import Forecast from "./Forecast";
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
            <Route exact path="/forecast" component={Forecast}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
