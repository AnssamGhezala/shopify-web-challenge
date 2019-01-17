import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Star } from "./star-solid.svg";

class Grid extends Component {
  state = { name: "", favourite: false, item: "" };

  createMarkup = () => {
    return { __html: this.state.item };
  };

  htmlDecode(content) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  render() {
    var count = 0;

    return (
      <div className={this.props.className}>
        {this.props.data.map(item => (
          <React.Fragment key={count++}>
            <div className="Title">
              <Star className="Star" />
              {item.title}
            </div>
            <div
              className="Description"
              dangerouslySetInnerHTML={{ __html: this.htmlDecode(item.body) }}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Grid;
