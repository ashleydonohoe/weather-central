import React, { Component } from 'react';
import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav/>
        <Home />
      </div>
    );
  }
}

export default App;
