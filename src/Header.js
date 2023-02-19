import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = () => {
return (
    <>
        <header>
            <nav>
                <a href="#">Lgoo</a>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>
                <div class="toggle">
                    <span class="hamurgur"></span>
                </div>
            </nav>
        </header>
    </>
)
}

export default Navbar;