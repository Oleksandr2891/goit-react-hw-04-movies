import { NavLink } from "react-router-dom"
import { NavLinkBar } from "./NavigationStyled";

const Navigation = () => {
    return (
        <NavLinkBar>
            <NavLink
                exact
                to="/"
                className="navLink-item"
                activeClassName="navLink-item__active"
            >Home</NavLink>
            <NavLink
                to="/movies"
                className="navLink-item"
                activeClassName="navLink-item__active"
            >Movies</NavLink>
        </NavLinkBar>
    );
}

export default Navigation;