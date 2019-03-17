import React, { Component } from "react";
import styled from "styled-components";
import WishlistButton from "../MovieList/movie-list-button";

const CardTemplate = styled.li`
    background-color: #efefef;
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: 0.5rem;
    max-height: 550px;

    .poster {
        height: auto;
        width: 100%;
    }
`;

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            inMovieList: this.props.inMovielist,
            deleteOnRemove: this.props.deleteOnRemove,
            deleted: false
        };
    }

    deleteOnRemove = del => {
        if (this.state.deleteOnRemove) {
            this.setState({ deleted: true });
        }
    };

    render() {
        if (!this.state.deleted) {
            return (
                <CardTemplate>
                    <h1>{this.props.data.Title}</h1>
                    <h2>{this.props.data.Year}</h2>
                    <WishlistButton
                        inMovielist={this.props.inMovielist}
                        data={this.props.data}
                        deleteOnRemove={this.deleteOnRemove}
                    />
                    <img className="poster" src={this.props.data.Poster} />
                </CardTemplate>
            );
        }
        return null;
    }
}

export default Card;
