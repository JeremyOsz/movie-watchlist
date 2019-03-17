import React from "react";
import CardsGrid from "./cards-container";
import SearchResult from "./card";

const Cards = ({ data }) => {
    console.log(data);
    if (data == "search") {
        return <h2>Search for a film to add to your watch list</h2>;
    } if (data === null || data === "" || data === undefined) {
        return <h2>No results</h2>;
    }

    return (
        <CardsGrid id="CardsGrid">
            {data.map(movieInfo => (
                <SearchResult key={movieInfo.imdbID} data={movieInfo} />
            ))}
        </CardsGrid>
    );
};
export default Cards;
