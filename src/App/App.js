import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Favourites from "./Favourites";
import Results from "./Results";

const API =
  "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000&fbclid=IwAR3nM6OSDuwjPL_opm_6Q4oJkuDcyk0_P5ZA-yJ_jbjGxf4iPYFMvV-5VM0";

const loadData = async () => {
  const response = await fetch(API);
  return await response.json();
};

class App extends Component {
  state = {
    results: [],
    favourites: [],
    search: "",
    isFetching: false
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (!this.state.search) {
      this.state.results.length && this.setState({ results: [] });
      return;
    }

    this.setState({ isFetching: true });

    const results = await loadData();
    this.setState({ results, isFetching: false });
  };

  handleSearch = event => {
    this.setState({ search: event.target.value });
  };

  isResultAFavourite = result => {
    const item = this.state.favourites.find(
      favourite => favourite.title === result.title
    );

    return Boolean(item);
  };

  handleFavouriteSelection = favourite => {
    let newFavourites;

    if (this.isResultAFavourite(favourite)) {
      newFavourites = this.state.favourites.filter(
        item => item.title !== favourite.title
      );
    } else {
      // create a new favouries array with the new favourite appended at the end
      newFavourites = [...this.state.favourites, favourite];
    }

    // replace the old favourites with the new ones
    this.setState({ favourites: newFavourites });
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
          isResultAFavourite={this.isResultAFavourite}
          onFavouriteSelection={this.handleFavouriteSelection}
          favourites={this.state.favourites}
          isFetching={this.state.isFetching}
        />
        <div className="Favourites-container">
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
