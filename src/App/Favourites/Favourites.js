import React, { Component } from "react";
import Grid from "../Grid";

class Favourites extends Component {
  isResultAFavourite = () => true;

  render() {
    return (
      <Grid
        className="Favourites"
        data={this.props.favourites}
        onFavouriteSelection={this.props.onFavouriteSelection}
        isResultAFavourite={this.isResultAFavourite}
      />
    );
  }
}

export default Favourites;
