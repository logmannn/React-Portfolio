import React, { Component } from "react";
import "./App.css";
import Intro from "./Intro";
import SlideCover from "./SlideCover";
import Loading from "./Loading";
import Header from "./Header";

class App extends Component {
  state = { value: 0 };

  componentDidMount() {
    this.setState(({ value }) => ({ value: 1 - value }));
  }

  render() {
    return (
      <div className="App">
        <Loading />
        <SlideCover />
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
