import React, { Component } from "react";
import "./App.css";
import Result from "./Result.js";
import Grid from "./Grid.js";
class Results extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Grid data={this.props.results} />
      </div>
    );
  }
}

export default Results;
