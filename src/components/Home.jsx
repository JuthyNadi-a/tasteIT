import React from 'react';
import HeroBanner from './HeroBanner';
import Button from './Button';
import Cards from './Cards';

import classes from './Home.module.css'


/* class Home extends Component {
    state = {
        cards: [1,2,3]
    }
    render() {
        return (
            <div className={classes.container}>
                <HeroBanner/>
                <div className={classes.bannerText}>
                    <h1>TasteIT</h1>
                    <h3>TasteIT is an recipe app.</h3>
                    <Button name={'Browse Recipes'}/>
                </div>
                <p className={classes.recipeText}>Looking for the recipes?</p>
                <div className={classes.cards}>
                {this.state.cards.map((card) => (
                    <Card 
                    heading={'Browse recipes'}
                    details={'Add more recipes jan,fdn nhf,akjbn,fcj fbkajsnj'}
                    />
                ))}
            </div>
        </div>
        );
    }
}

export default Home; */

const Home = () => {
    return (
        <div className={classes.container}>
                <HeroBanner/>
                <div className={classes.bannerText}>
                    <h1>TasteIT</h1>
                    <h3>TasteIT is an recipe app.</h3>
                    <Button name={'Browse Recipes'}/>
                </div>
                <p className={classes.recipeText}>Looking for the recipes?</p>
                <Cards/>
        </div>
    );
};

export default Home;