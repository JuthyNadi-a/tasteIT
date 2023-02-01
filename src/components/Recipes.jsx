import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

import classes from './Recipes.module.css'

const Recipes = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState({
        string: '',
    });

    useEffect(() => {
        axios.get('http://localhost:3007/recipes').then((res) => 
        setData(res.data))
    },[]);

    const searchHandler = (e) => {
        setSearch({
            ...search,
            string: e.target.value,
        });
        let foundRecipes = data.filter(recipe => 
            /* console.log('data is',data) 
            console.log('data name', data.name),
            console.log('string', search.string), */
            recipe.name.toLowerCase().includes(search.string.toLowerCase())
            );         
        setData(foundRecipes);   
    }
    return (
        <div className={classes.mainContainer}>
           <div>
           <input
           type='search'
           placeholder='Search by name or country'
           {...search}
           onChange = {searchHandler}
           />
           <label htmlFor="search">Search</label>
           </div>
            <div className={classes.cards}>
            {
                data && data.length>0 && data.map((item)=> 
                <RecipeCard 
                key={item.id}
                card_name = {item.name}
                > 
                {/* <ol>{item.ingredients.map((element,i) =>
                    <li key={i}>{element.ingredient}, {element.quantity }</li>
                )}</ol> */}
                </RecipeCard>
                )
            }
            </div>
        </div>
    );
};

export default Recipes;