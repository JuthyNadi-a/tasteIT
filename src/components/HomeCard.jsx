import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './HomeCard.module.css'

const HomeCard = ({heading, details,link,name}) => {
    return (
        <div className={classes.card}>
            <p>{heading}</p>
            <p>{details}</p>
            <NavLink to={link}><button className={classes.btn}>{name}</button></NavLink>
        </div>
    );
};

export default HomeCard;