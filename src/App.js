import React, { Component } from "react";
import "./App.css";
import Search from "./Search.js";
import Grid from "./Grid.js";

class App extends Component {
  state = {
    results: [{ title: "blue bin", body: "idk :(((((" }],
    favourites: [],
    search: ""
  };
  render() {
    return (
      <div className="App">
        <div>
          <header className="Header">Toronto Waste Lookup</header>
          <Search
            search={this.state.search}
            onSearch={this.handleSearch}
            className="Search"
          />

          <Grid data={this.state.results} className="container" />
          <div className="Favourites">
            <Grid data={this.state.favourites} className="container" />
            Favourites
          </div>
        </div>
      </div>
    );
  }
}

export default App;
