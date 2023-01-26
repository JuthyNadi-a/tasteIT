import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.links}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/recipes'>Recipes</NavLink>
                </li>
                <li>
                    <NavLink to='/add'>Add more recipes</NavLink>
                </li>
            </ul>
        </nav> 
    );
};

export default Nav;