import React from 'react';

import classes from './HomeCard.module.css'

const HomeCard = ({heading, details,navLink,name,target,rel}) => {
    return (
        <div className={classes.card}>
            <p className={classes.heading}>{heading}</p>
            <p>{details}</p>
            <a to={navLink} href={navLink} target={target} rel={rel} className={classes.link}>{name}</a>
        </div>
    );
};

export default HomeCard;