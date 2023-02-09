import React/* , {useState, useEffect} */ from 'react';
/* import axios from 'axios'; */
import { NavLink } from 'react-router-dom';
import Button from './Button';
import classes from './RecipeCard.module.css'
const RecipeCard = ({card_name, flag, link}) => {
    return (
        <div className={classes.recipeCard}>
            <div className={classes.flag}>
                <img src={flag} alt={flag}/>
            </div>
            <img src={`https://source.unsplash.com/500x400/?${card_name}`} alt={card_name}/>
            <h1>{card_name}</h1>
            <NavLink to={link}><Button name={'See more'} className={classes.moreBtn}/></NavLink>
        </div>
    );
};

export default RecipeCard;