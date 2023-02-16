import React/* , {useState, useEffect} */ from 'react';
/* import axios from 'axios'; */
import { NavLink } from 'react-router-dom';
import Button from './Button';
import classes from './RecipeCard.module.css'
const RecipeCard = ({card_name, flag, image, link}) => {
    return (
        <div className={classes.recipeCard}>
            <img className={classes.flag} src={flag} alt={flag}/>
            <img src={image} alt={card_name}/>
            <h1>{card_name}</h1>
            <NavLink to={link}><Button name={'See more'} className={classes.moreBtn}/></NavLink>
        </div>
    );
};

export default RecipeCard;