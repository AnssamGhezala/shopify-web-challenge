import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Star } from "./star-solid.svg";

class Grid extends Component {
  state = { name: "", favourite: false };

  render() {
    var count = 0;

    console.log(this.props.data);
    return (
      <div className={this.props.className}>
        {this.props.data.map(item => (
          <div key={count++}>
            <div className="Title">
              <Star className="Star" />
              {item.title}
            </div>
            <div className="Description">{item.body}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
