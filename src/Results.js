import React, { Component } from "react";
import "./App.css";

class Results extends Component {
  render() {
    return (
      <div className={this.props.children}>
        <a> Hi </a>
      </div>
    );
  }
}

export default Results;
