import React, { Component } from "react";

const fetchByQuery = async (API_KEY, query) => {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&r=json`
    ).then(response => response.json());
    const json = await response;
    return json;
};

export class InstagramContainer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        placeholder: "",
        query: "",
        value: ""
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const API_KEY = process.env.OMDb_API_KEY;
        // fetchByQuery(API_KEY, this.state.value).then(response =>
        //     console.log(response)
        // );
        console.log(fetchByQuery(API_KEY, this.state.value));
        event.preventDefault();
    }

    render() {
        const { placeholder, query } = this.state;
        return (
            <form
                id="SearchForm"
                name="SearchForm"
                onSubmit={this.handleSubmit}
            >
                <h1>Search for a movie</h1>
                <input
                    type="search"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Enter Movie Title"
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default InstagramContainer;
