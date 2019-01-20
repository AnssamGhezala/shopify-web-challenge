import React, { Component } from "react";
import "./Results.css";
import Grid from "../Grid";

class Results extends Component {
  isResultAFavourite = result => {
    const item = this.props.favourites.find(
      favourite => favourite.title === result.title
    );

    return Boolean(item);
  };

  getClassName = () => {
    return this.props.isFetching ? "fetching-container" : "container";
  };

  render() {
    return (
      <Grid
        className={this.getClassName()}
        data={this.props.results}
        onFavouriteSelection={this.props.onFavouriteSelection}
        isResultAFavourite={this.isResultAFavourite}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default Results;
