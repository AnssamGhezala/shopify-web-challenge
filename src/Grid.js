import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Star } from "./star-solid.svg";

class Grid extends Component {
  state = { name: "", favourite: false };

  render() {
    var count = 0;
    return (
      <div className={this.props.className}>
        {this.props.data.map(item => (
          <div key={count++}>
            <Star className="Star">
              {item.title}
              <div>{item.body}</div>
            </Star>
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
