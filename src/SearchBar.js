import React, { Component } from "react";
import "./App.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" className={this.props.className} />
      </div>
    );
  }
}

export default SearchBar;
