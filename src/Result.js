import React, { Component } from "react";
import "./App.css";

class Result extends Component {
  state = { name: "", favourite: false };
  handleClick = () => {
    console.log("clicked");
    this.setState({ favourite: true });
  };
  render() {
    return (
      <div className={this.props.children}>
        <a> Hi </a>
      </div>
    );
  }
}

export default Result;
