import React, { Component } from "react";
import "./App.css";
import star from "./greyStar.png";
class Result extends Component {
  state = { name: "", favourite: false };
  handleClick = () => {
    console.log("clicked");
    this.setState({ favourite: true });
  };
  render() {
    return (
      <div className={this.props.children}>
        <img
          src={star}
          alt="star"
          className="Star"
          onClick={this.handleClick}
        />
        <a> Hi </a>
      </div>
    );
  }
}

export default Result;
