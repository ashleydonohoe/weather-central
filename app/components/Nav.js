import React, { Component } from 'react';
import Form from "./Form";

class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <h2>Weather Central</h2>
        <Form onSubmit={this.handleSubmit}/>
      </header>
    );
  }
}

export default Nav;
