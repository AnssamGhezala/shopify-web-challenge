import React, { Component } from "react";
import "./App.css";
import Search from "./Search.js";
import Grid from "./Grid.js";

class App extends Component {
  state = {
    results: [
      { title: "blue bin", body: "idk :(((((" },
      { title: "purple bin", body: "it's purple yey" }
    ],
    favourites: [{ title: "green bin", body: "it's green" }],
    search: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  handleSearch = () => {
    console.log("submit");
  };
  render() {
    return (
      <div className="App">
        <div>
          <header className="Header">Toronto Waste Lookup</header>
          <Search
            search={this.state.search}
            onSearchChange={this.handleSearch}
            onSearchSubmit={this.handleSubmit}
            className="Search"
          />

          <Grid data={this.state.results} className="container" />
          <div className="Favourites">
            <div className="FavouriteText"> Favourites </div>
            {/* <Grid data={this.state.favourites} className="container" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
