import React/* , {useState, useEffect} */ from 'react';
/* import axios from 'axios'; */
import Button from './Button';
import classes from './RecipeCard.module.css'
const RecipeCard = ({card_name, flag}) => {
   /*  const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/name').then((res) => {
            const countries = res.data.map((item)=> {
                return {
                    countryName: item.name,
                    flag: item.flag
                }
            })
            setCountries(countries);
        })
    },[]); */
    return (
        <div className={classes.recipeCard}>
            <img src={`https://source.unsplash.com/500x400/?${card_name}`} alt={card_name}/>
            <h1>{card_name}</h1>
            <Button name={'See more'} className={classes.moreBtn}/>
        </div>
    );
};

export default RecipeCard;