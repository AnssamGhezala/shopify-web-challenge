import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import Results from "./Results.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="Header">Toronto Waste Lookup</header>
          <SearchBar className="SearchBar" />
          <button className="Button">
            <span className="Icon" />
          </button>
          <Results className="results" />
        </div>
      </div>
    );
  }
}

export default App;
