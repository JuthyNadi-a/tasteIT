import React from 'react';
import Button from './Button';
import Card from './Card';

import classes from './Cards.module.css'

const Cards = () => {
    return (
        <div>
            <div className={classes.cards}>
                    <Card 
                    heading={'Browse recipes'}
                    details={'Find your favourites in this collection. You can search recipes based on name or country'}
                    Button name={'Browse Recipes'}
                    />
                    <Card 
                    heading={'Add recipes'}
                    details={'Recipe from your country is missing? No worries, add one!'}
                    name= {'Add recipes'}
                    />
                    <Card 
                    heading={'Want to know more about our projects?'}
                    details={'Visit our programme homepage'}
                    ><Button name={'Browse'} className={classes.button}>{'Browse'}</Button></Card>
                </div>
        </div>
    );
};

export default Cards;