import React, { Component } from "react";
import Grid from "../Grid";

class Results extends Component {
  isResultAFavourite = result => {
    const item = this.props.favourites.find(
      favourite => favourite.title === result.title
    );

    return Boolean(item);
  };

  render() {
    return (
      <Grid
        className="container"
        data={this.props.results}
        onFavouriteSelection={this.props.onFavouriteSelection}
        isResultAFavourite={this.isResultAFavourite}
      />
    );
  }
}

export default Results;
