import React, { Component } from "react";
import "./App.css";
import Grid from "./Grid.js";

class Fav extends Component {
  render() {
    return (
      <div className="fav">
        <Grid data={this.props.favourites} />
      </div>
    );
  }
}

export default Fav;
