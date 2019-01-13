import React, { Component } from "react";
import "./App.css";
import Result from "./Result.js";

class Results extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Result> </Result>
      </div>
    );
  }
}

export default Results;
