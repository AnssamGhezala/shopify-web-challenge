import React, { Component } from "react";
import "./Grid.css";
import Loader from "./Loader";
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
    return (
      <div className={this.props.className || ""}>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          this.props.data.map((item, idx) => (
            <React.Fragment key={idx}>
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
          ))
        )}
      </div>
    );
  }
}

export default Grid;
