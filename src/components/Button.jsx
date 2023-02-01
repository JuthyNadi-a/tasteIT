import React from 'react';
import classes from './Button.module.css'

const Button = ({name}) => {
    return (
        <button className={classes.btn}>
            {name}
        </button>
    );
};
export default Button;