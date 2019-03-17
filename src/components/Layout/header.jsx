import React from "react";
import styled from "styled-components";

const HeaderTemplate = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: #cab2ca;
    color: #3f3148;

    h1 {
        font-size: 3em;
        font-weight: 600;
    }
`;

const Header = ({ title }) => {
    return (
        <HeaderTemplate>
            <h1>{title}</h1>
        </HeaderTemplate>
    );
};

export default Header;
