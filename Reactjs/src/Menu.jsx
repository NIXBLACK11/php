import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

const Menu = () => {
    return(
        <div>
        <NavLink className="navlink" to="/">
            Home
        </NavLink>
        <NavLink className="navlink" to="/about">
            About us
        </NavLink>
        <NavLink className="navlink" to="/contact">
            Contact Us
        </NavLink>
        <a href="/about" className="alink">about us</a>
        <a href="/contact" className="alink">Contact</a>
     </div>
    );
}

export default Menu;