import React, { Component } from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = { value: 0 };

  componentDidMount() {
    this.setState(({ value }) => ({ value: 1 - value }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
