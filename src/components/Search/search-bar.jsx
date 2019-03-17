import React, { Component } from "react";
import ResultsGrid from "../MovieCard/cards-grid";
import SearchResult from "../MovieCard/card";

const fetchByQuery = async (API_KEY, query) => {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    ).then(response => response.json());
    const json = await response;
    return json;
};

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        placeholder: "",
        query: "",
        value: "",
        results: "search"
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const API_KEY = process.env.OMDb_API_KEY;
        fetchByQuery(API_KEY, this.state.value).then(response =>
            this.setState({ results: response.Search })
        );
        event.preventDefault();
    }

    render() {
        const { results } = this.state;
        return (
            <>
                <form
                    id="SearchForm"
                    name="SearchForm"
                    onSubmit={this.handleSubmit}
                >
                    <label>
                        <h1>Film Search</h1>
                        <input
                            type="search"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="Enter Movie Title"
                        />
                        <button type="submit">Search</button>
                    </label>
                </form>
                <ResultsGrid id="Results" data={results} />
            </>
        );
    }
}

export default SearchBar;
