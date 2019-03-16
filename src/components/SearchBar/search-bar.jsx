import React, { Component } from "react";

export class InstagramContainer extends Component {
  state = {
    placeholder: "",
    query: placeholder
  };

  render() {
    const { placeholder, query } = this.state;
    return (
      <form id="SearchForm" name="SearchForm">
        <input type="search" />
        <submit />
      </form>
    );
  }
}

export default InstagramContainer;
