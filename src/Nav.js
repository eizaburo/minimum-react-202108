import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeStyle={{color:"#aaa"}}>Home</NavLink></li>
                <li><NavLink exact to="/contact" activeStyle={{color:"#aaa"}}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;