import styled from "styled-components";

export const NavLinkBar = styled.nav`
    .navLink-item{
        font-size: calc(2.8em + 2.6vw);
        font-weight: 700;
        letter-spacing: .01em;
        padding: 10rem 0 0 4.5rem;
        text-shadow: .022em .022em .022em #111;
        text-decoration: none;
        color: #fff;
    };

    .navLink-item__active{
        color: #ff0606;
    }

`;