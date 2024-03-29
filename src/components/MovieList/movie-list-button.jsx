import React, { Component } from "react";
import styled from "styled-components";

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

export class MovieListButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            inMovielist: this.props.inMovielist
        };
    }

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

    RemoveFromMovieList = data => {
        // Check local storage if movie is in list
        let MovieList = JSON.parse(localStorage.MovieList);
        MovieList = MovieList.filter(x => x.imdbID !== data.imdbID);

        // Replace movie list with one exluding removed movie
        localStorage.setItem("MovieList", JSON.stringify(MovieList));

        // Remove remove Button
        this.setState({ inMovielist: false });
        if (this.props.deleteOnRemove) {
            console.log(this.props.deleteOnRemove("hi"));
        }
    };

    render() {
        // const { data, inMovielist } = this.state;

        if (!this.state.inMovielist) {
            return (
                <Button
                    onClick={this.AddToMovieList.bind(this, this.state.data)}
                    movie={this.state.data}
                >
                    Add to movie list
                </Button>
            );
        }
        return (
            <Button
                className="remove"
                onClick={this.RemoveFromMovieList.bind(this, this.state.data)}
                movie={this.state.data}
            >
                Remove from movie list
            </Button>
        );
    }
}

export default MovieListButton;
