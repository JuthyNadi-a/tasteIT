import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3007/recipes').then((res) => 
        setData(res.data))
    },[]);
    const searchHandler = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    const searchRecipeHandler = () => {
        data.filter((item) => {
            console.log(data);
            console.log(item.name);
            return item.name.toLowerCase().includes(search);
        })
    }
    return (
        <div>
           <input
           type='search'
           onChange={searchHandler}
           placeholder='Search by name or country'
           />
           <div>
                {
                   searchRecipeHandler &&searchRecipeHandler.length>0 && searchRecipeHandler.map((item) => 
                   <div key={item.id}>
                        <p>{item.name}</p>
                        <ol>{item.ingredients.map((element,i) =>
                                <li key={i}>{element.ingredient}, {element.quantity }</li>
                        )}</ol>
                    </div>
                   ) 
                }
            <RecipeCard 
            name={''}
            flag={''}/>    
           </div>
            <div>
            {
                data && data.length>0 && data.map((item)=>
                <div key={item.id}>
                    <p>{item.name}</p>
                    <ol>{item.ingredients.map((element,i) =>
                            <li key={i}>{element.ingredient}, {element.quantity }</li>
                    )}</ol>
                </div>
                )
            }
            </div>
        </div>
    );
};

export default Recipes;