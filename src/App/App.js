import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Favourites from "./Favourites";
import Results from "./Results";

class App extends Component {
  state = {
    results: [],
    favourites: [],
    search: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.search) {
      this.state.results.length && this.setState({ results: [] });
      return;
    }

    fetch(
      "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000&fbclid=IwAR3nM6OSDuwjPL_opm_6Q4oJkuDcyk0_P5ZA-yJ_jbjGxf4iPYFMvV-5VM0"
    )
      .then(response => response.json())
      .then(results => {
        this.setState({
          results: results.filter(result =>
            result.keywords.includes(this.state.search)
          )
        });
      });
  };

  handleSearch = event => {
    var text = event.target.value;
    this.setState({ search: text });
  };

  handleFavouriteSelection = favourite => {
    if (this.state.favourites.includes(favourite)) {
      const index = this.state.favourites.indexOf(favourite);
      const length = this.state.favourites.length;
      const newFavourites = [
        ...this.state.favourites.slice(0, index),
        ...this.state.favourites.slice(index + 1, length)
      ];
      this.setState({ favourites: newFavourites });
    } else {
      // create a new favouries array with the new favourite appended at the end
      const newFavourites = [...this.state.favourites, favourite];
      // replace the old favourites with the new ones
      this.setState({ favourites: newFavourites });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="Header">Toronto Waste Lookup</header>
        <Search
          search={this.state.search}
          onSearchChange={this.handleSearch}
          onSearchSubmit={this.handleSubmit}
          className="Search"
        />
        <Results
          results={this.state.results}
          onFavouriteSelection={this.handleFavouriteSelection}
          favourites={this.state.favourites}
        />
        <div className="Favourites">
          <div className="FavouriteText"> Favourites </div>
          <Favourites
            results={this.state.results}
            onFavouriteSelection={this.handleFavouriteSelection}
            favourites={this.state.favourites}
          />
        </div>
      </div>
    );
  }
}

export default App;
