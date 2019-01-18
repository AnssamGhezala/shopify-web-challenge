import React, { Component } from "react";
import "./App.css";
import Search from "./Search.js";
import Grid from "./Grid.js";

class App extends Component {
  state = {
    results: [],
    favourites: [],
    search: ""
  };
  handleSubmit = e => {
    e.preventDefault();
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
  recieveFavourites = favourite => {
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

    console.log(this.state.favourites);
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
          <Grid
            data={this.state.results}
            className="container"
            test={this.recieveFavourites}
            star="Star"
          />
          <div className="Favourites">
            <div className="FavouriteText"> Favourites </div>
            <Grid
              data={this.state.favourites}
              className="container"
              test={this.recieveFavourites}
              star="GreenStar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
