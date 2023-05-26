import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import nav from "react-bootstrap/Nav";
import './NavBar.css'

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Microblog</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <Link className="nav-link" to="/">Blog</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="nav-link" to="/new">Add a new post</Link>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;



