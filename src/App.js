import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import Results from "./Results.js";
import { ReactComponent as Icon } from "./search-solid.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="Header">Toronto Waste Lookup</header>
          <SearchBar className="SearchBar" />
          <button className="btn Button">
            <Icon className="Icon" />
          </button>
          <Results className="Results" />
          <div className="Favourites"> Favourites </div>
        </div>
      </div>
    );
  }
}

export default App;
