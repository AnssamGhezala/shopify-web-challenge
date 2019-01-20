import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Star } from "./star-solid.svg";

class Grid extends Component {
  state = {
    star: this.props.star,
    favourites: this.props.favourites,
    type: this.props.type
  };

  htmlDecode(content) {
    let e = document.createElement("div");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  handleStar = item => {
    if (this.state.type == "result") {
      //   console.log(this.state.favourites);
      if (this.state.favourites.includes(item)) {
        this.setState({ star: "GreenStar" });
      } else {
        this.setState({ star: "Star" });
      }
    } else {
      this.setState({ star: "GreenStar" });
    }
  };
  render() {
    var count = 0;

    return (
      <div className={this.props.className}>
        {this.props.data.map(item => (
          <React.Fragment key={count++}>
            <div className="Title">
              <Star
                className={this.state.star}
                onClick={() => {
                  this.setState({ star: "GreenStar" });
                  this.props.test(item);
                }}
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
// () => {
//   if (this.state.favouritres.includes(item)) {
//     return "GreenStar";
//   } else {
//     return this.state.star;
//   }
// }
