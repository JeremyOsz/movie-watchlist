import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #9696ca;
    color: white;
    border: none;
    border-radius: 4px;
    margin: 1em;
    padding: 0.5em 1em;
`;

export class MovieListButton extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: this.props.data,
        inMovielist: false
    };

    AddToMovieList = data => {
        // If Movie List Exists in Local Storage load, else create
        const MovieList = localStorage.MovieList
            ? JSON.parse(localStorage.MovieList)
            : [];

        // Add movie to movieList if not already in;
        if (MovieList.filter(x => x.imdbID === data.imdbID).length === 0) {
            MovieList.push(data);
        }

        // Commit to local stroage if not in list
        localStorage.setItem("MovieList", JSON.stringify(MovieList));

        // Remove add to list Button
        this.setState({ inMovielist: true });
    };

    render() {
        const { data, inMovielist } = this.state;
        if (!inMovielist) {
            return (
                <Button
                    onClick={this.AddToMovieList.bind(this, data)}
                    movie={data}
                >
                    Add to movie list
                </Button>
            );
        }
        return null;
    }
}

export default MovieListButton;
