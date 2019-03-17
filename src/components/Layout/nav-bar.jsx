import React, { Component } from "react";
import styled from "styled-components";

const NavBarTemplate = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 3em;
    h1 {
        font-size: 3em;
        font-weight: 600;
    }
    a {
        display: block;
        width: 100%;
        padding: 0.5em;
        font-size: 1.5em;
        cursor: pointer;
        &:hover {
            border-bottom: lightblue 2px solid;
        }
        &.selected {
            border-bottom: 1px solid lightblue;
            font-weight: 600;
        }
    }
`;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage,
            viewController: props.viewController,
            searchSelected: "selected",
            wishlistSelected: "unselected"
        };
    }

    selectSearch = (e, viewController) => {
        viewController("search");
        this.setState({
            searchSelected: "selected",
            movielistSelected: "unselected"
        });
    };

    selectList = (e, viewController) => {
        viewController("movie");
        this.setState({
            searchSelected: "unselected",
            movielistSelected: "selected"
        });
    };

    render() {
        return (
            <NavBarTemplate>
                <a
                    className={this.state.searchSelected}
                    id="Search"
                    onClick={e =>
                        this.selectSearch(e, this.state.viewController)
                    }
                >
                    Search
                </a>
                <a
                    className={this.state.movielistSelected}
                    onClick={e => this.selectList(e, this.state.viewController)}
                    id="Watchlist"
                >
                    Watchlist
                </a>
            </NavBarTemplate>
        );
    }
}

export default NavBar;
