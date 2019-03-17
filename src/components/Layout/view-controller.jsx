import React from "react";
import styled from "styled-components";
import SearchBar from "../Search/search-bar";
import MovieList from "../MovieList/movie-list";

const ViewController = ({ currentView }) => {
    if (currentView == "search") {
        return <SearchBar placeholder="placeholder" />;
    }
    return <MovieList />;
};

export default ViewController;
