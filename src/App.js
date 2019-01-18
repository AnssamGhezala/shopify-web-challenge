import React, { Component } from "react";
import "./App.css";
import Search from "./Search.js";
import Grid from "./Grid.js";

class App extends Component {
  state = {
    results: [
      { title: "blue bin", body: "it's green bin yoho" },
      { title: "purple bin", body: "it's purple yey" }
    ],
    favourites: [{ title: "green bin", body: "it's green yey" }],
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
      var index = this.state.favourites.indexOf(favourite);
      this.state.favourites.splice(index, 1);
    } else {
      this.state.favourites.push(favourite);
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
