import React from 'react';
import HomeCard from './HomeCard';

import classes from './HomeCards.module.css'

const HomeCards = () => {
    return (
        <div>
            <div className={classes.cards}>
                    <HomeCard
                    heading={'Browse recipes'}
                    details={'Find your favourite recipes by searching  based on name or country'}
                    navLink={'/recipes'}
                    name={'All recipes'}
                    />
                    <HomeCard 
                    heading={'Add recipes'}
                    details={'Recipe from your country is missing? No worries, add one!'}
                    navLink={'/add'}
                    name={'Add new recipes'}
                    />
                    <HomeCard 
                    heading={'Want to know more about our projects?'}
                    details={'Visit our programme homepage'}
                    name={'Business College Helsinki'}
                    navLink={'https://en.bc.fi/'}
                    target={'_blank'}
                    rel={'noreferrer'}
                    />
                </div>
        </div>
    );
};

export default HomeCards;