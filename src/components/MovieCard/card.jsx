import React from "react";
import styled from "styled-components";
import WishlistButton from "../MovieList/movie-list-button";

const CardTemplate = styled.li`
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: 0.5rem;
    width: 1fr;

    .poster {
        height: auto;
        width: 100%;
    }
`;

const Card = ({ data, inWishlist }) => {
    return (
        <CardTemplate>
            <h1>{data.Title}</h1>
            <h2>{data.Year}</h2>
            <WishlistButton inWishlist={inWishlist} data={data} />
            <img className="poster" src={data.Poster} />
        </CardTemplate>
    );
};

export default Card;
