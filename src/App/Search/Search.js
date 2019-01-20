import React, { Component } from "react";

import { ReactComponent as Icon } from "./search-solid.svg";

import "./Search.css";

class Search extends Component {
  state = { search: "" };

  render() {
    return (
      <div className={this.props.className}>
        <form id="form" onSubmit={this.props.onSearchSubmit} className="Form">
          <input
            name="search"
            placeholder=""
            onChange={this.props.onSearchChange}
            type="text"
            className="SearchBar"
          />
          <button type="submit" form="form" className="btn Button">
            <Icon className="Icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
