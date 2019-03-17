import React from "react";
import styled from "styled-components";
import SearchBar from "../Search/search-bar";

const ViewController = ({ currentView }) => {
    if (currentView == "search") {
        return <SearchBar placeholder="placeholder" />;
    }
    return "CHANGED STATE";
};

export default ViewController;
