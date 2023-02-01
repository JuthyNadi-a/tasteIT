import React from 'react';
import { NavLink } from 'react-router-dom';

import HeroBanner from './HeroBanner';
import Button from './Button';
import HomeCards from './HomeCards';

import classes from './Home.module.css'


const Home = () => {
    return (
        <div className={classes.container}>
                <HeroBanner/>
                <div className={classes.bannerText}>
                    <h1>TasteIT</h1>
                    <h3>TasteIT is an recipe app.</h3>
                    <NavLink to="recipes">
                        <Button name={'Browse Recipes'} />
                    </NavLink>
                </div>
                <p className={classes.recipeText}>Looking for the recipes?</p>
                <HomeCards/>
        </div>
    );
};

export default Home;