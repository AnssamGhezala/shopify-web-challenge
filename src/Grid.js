import React, { Component } from "react";
import "./App.css";

class Grid extends Component {
  state = { name: "", favourite: false };

  render() {
    return (
      <div className={this.props}>
        <a> Hi </a>
      </div>
    );
  }
}

export default Grid;
