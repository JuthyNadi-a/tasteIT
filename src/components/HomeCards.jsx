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
                    link={'recipes'}
                    name={'All recipes'}
                    />
                    <HomeCard 
                    heading={'Add recipes'}
                    details={'Recipe from your country is missing? No worries, add one!'}
                    link={'add'}
                    name={'Add new recipes'}
                    />
                    <HomeCard 
                    heading={'Want to know more about our projects?'}
                    details={'Visit our programme homepage'}
                    link={'/'}
                    name={'Business College Helsinki'}
                    />
                </div>
        </div>
    );
};

export default HomeCards;