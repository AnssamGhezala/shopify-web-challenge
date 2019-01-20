import React, { Component } from "react";
import { ReactComponent as Star } from "./star-solid.svg";

class Grid extends Component {
  htmlDecode(content) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  getStartClassNameFromItem = item => {
    return this.props.isResultAFavourite(item) ? "GreenStar" : "Star";
  };

  render() {
    var count = 0;

    return (
      <div className={this.props.className || ""}>
        {this.props.data.map(item => (
          <React.Fragment key={count++}>
            <div className="Title">
              <Star
                className={this.getStartClassNameFromItem(item)}
                onClick={() => this.props.onFavouriteSelection(item)}
              />
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
