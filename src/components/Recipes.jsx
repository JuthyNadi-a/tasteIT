import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

import classes from './Recipes.module.css'

const Recipes = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState({
        string: '',
    });

    useEffect(() => {
        axios.get('http://localhost:3007/recipes').then((res) => 
        setData(res.data));
        setIsLoading(false);
    },[]);
    
    const searchHandler = (e) => {
        setSearch({
            ...search,
            string: e.target.value,
        });
        let foundRecipes = data.filter(recipe => {
            return recipe.name.toLowerCase().includes(search.string.toLowerCase())
            });         
        setData(foundRecipes);  
        setIsLoading(false);
    }
    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div className={classes.mainContainer}>
           <div>
           <input
           type='search'
           placeholder='Search by recipe name'
           {...search}
           onChange = {searchHandler}
           />
           <label htmlFor="search" className={classes.search}>Search</label>
           </div>
            <div className={classes.cards}>
            {
                data && data.length>0 && data.map((item)=> 
                <RecipeCard 
                key={item.id}
                card_name = {item.name}
                image= {item.image}
                flag= {item.country}
                link={`/recipes/${item.id}`}
                />
                )
            }
            </div>
        </div>
    );
};

export default Recipes;