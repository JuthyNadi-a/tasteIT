import React from 'react';
import Button from './Button';

import classes from './Card.module.css'

const Card = ({heading, details}) => {
    return (
        <div className={classes.card}>
            <p>{heading}</p>
            <p>{details}</p>
            <Button/>
        </div>
    );
};

export default Card;