import React/* , {useState, useEffect} */ from 'react';
/* import axios from 'axios'; */
import Button from './Button';
import classes from './RecipeCard.module.css'
const RecipeCard = ({name, flag}) => {
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
            <img src={`https://source.unsplash.com/30vwx15vh/${name}`} alt={name}/>
            <img src={flag} alt={flag} />
            <h1>{name}</h1>
            <Button name={'See more'}/>
        </div>
    );
};

export default RecipeCard;