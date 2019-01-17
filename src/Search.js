import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Icon } from "./search-solid.svg";

class Search extends Component {
  state = { search: "" };

  handleSearchChange = () => {};
  render() {
    return (
      <div className={this.props.className}>
        <form id="form" onSubmit={this.props.onSearchSubmit} className="Form">
          <input
            name="search"
            placeholder=""
            value={this.state.search}
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
