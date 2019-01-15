import React, { Component } from "react";
import "./App.css";
import { ReactComponent as Icon } from "./search-solid.svg";

class Search extends Component {
  state = { search: "" };
  handleSubmit = () => {
    console.log("submit");
  };
  handleSearchChange = () => {};
  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit} className="Form">
          <input
            name="search"
            placeholder=""
            value={this.state.search}
            onChange={this.handleSearchChange}
            type="text"
            className="SearchBar"
          />
          <button className="btn Button">
            <Icon className="Icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
