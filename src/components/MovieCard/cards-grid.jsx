import React from "react";
import CardsGrid from "./cards-container";
import SearchResult from "./card";

const Cards = ({ data, deleteOnRemove }) => {
    if (data == "search") {
        return <h2>Search for a film to add to your watch list</h2>;
    }
    if (data === null || data === "" || data === undefined) {
        return <h2>No results</h2>;
    }
    return (
        <CardsGrid id="CardsGrid">
            {data.map(movieInfo => {
                const MovieList = JSON.parse(localStorage.MovieList);

                const inMovieList =
                    MovieList.filter(x => x.imdbID == movieInfo.imdbID).length >
                    0;

                console.log(inMovieList);
                return (
                    <SearchResult
                        key={movieInfo.imdbID}
                        data={movieInfo}
                        inMovielist={inMovieList}
                        deleteOnRemove={deleteOnRemove}
                    />
                );
            })}
        </CardsGrid>
    );
};
export default Cards;
