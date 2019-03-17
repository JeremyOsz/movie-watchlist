import React, { Component } from "react";
import styled from "styled-components";
import ResultsGrid from "../MovieCard/cards-grid";

const Button = styled.button`
    background-color: #9696ca;
    color: white;
    border: none;
    border-radius: 4px;
    margin: 1em;
    padding: 0.5em 1em;

    &.remove {
        background-color: red;
    }
`;

const getMovieList = () => {
    return localStorage.MovieList ? JSON.parse(localStorage.MovieList) : null;
};

export class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: getMovieList()
        };
    }

    render() {
        return (
            <ResultsGrid id="Results" data={this.state.list} deleteOnRemove />
        );
    }
}

export default MovieList;
