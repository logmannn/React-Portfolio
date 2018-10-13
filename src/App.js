import React, { Component } from "react";
import "./App.css";
import Portfolio from "./Home/Portfolio";
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
          <Route exact path="/" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
