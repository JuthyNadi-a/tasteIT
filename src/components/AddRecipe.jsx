import axios from 'axios';
import React , { useEffect, useState } from 'react';

import classes from './Add.module.css';

const Add = ({ name, author, description, instructions}) => {
    const [recipes, setRecipes] = useState({
        name: '', 
        author: '', 
        description: '',
        image: '',
        ingredients: [
            {
                ingredient: '',
                quantity: ''
            }
        ],
        instructions: '',
    });
    const [countries, setCountries] = useState([]);

    const inputHandler = (e) => {
        setRecipes({...recipes, [e.target.name]: e.target.value})
    };
   
    const handleIngredientChange = (i, e) => {
        const updatedIngredients = [...recipes.ingredients];
        updatedIngredients[i][e.target.name] = e.target.value;
        setRecipes({ ...recipes, ingredients: updatedIngredients });
    };

    const addMoreHandler = () => {
        setRecipes({
            ...recipes,
            ingredients: [...recipes.ingredients, { ingredient: '', quantity: '' }],
        });
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3007/recipes", { ...recipes })
            .then(() => {
                alert('Recipe submitted successfully')
                setRecipes({
                    name: '',
                    author: '',
                    description: '',
                    image: '',
                    ingredients: [{ ingredient: '', quantity: '' }],
                    instructions: '',
                });
                e.target.reset();
            })
    };
    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then((res)=> {
            const selectCountries = res.data.map((country)=> {
                return {
                    country_name: country.name,
                    flag: country.flag
                };
            });
            setCountries(selectCountries);
        })
    }, [])

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.content}>
                <div className={classes.inputs}>
                    <label htmlFor="name">Recipe name</label>
                    <input type="text" required name="name" id="name" value={name} onChange={inputHandler}/>
                </div>
                <div className={classes.inputs}>
                    <label htmlFor="author">Author</label>
                    <input type="text" required name="author" id="author" value={author} onChange={inputHandler}/>
                </div>
                <div className={classes.inputs}>
                    <label htmlFor="country">Recipe is from: </label>
                    <select 
                    id='country'
                    name="country"
                    onChange={inputHandler}
                    >
                        <option>Select Your Country</option>
                        { countries.map((country)=> (
                            <option value={country.flag} key={country.country_name}>
                                {country.country_name}
                            </option>
                            ))
                        }
                    </select>
                </div>
                <div className={classes.inputs}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" required id="description" cols="20" rows="7" value={description} onChange={inputHandler}></textarea>
                </div>
                <div className={classes.inputs}>
                    <label htmlFor="image">Image</label>
                    <input type="url" required name="image" id="image" onChange={inputHandler}/>
                </div>
                
                <div id='ingredient-group'>
                {
                   recipes.ingredients.map((ingredients, i) => {
                        return (
                            <div key={i}>
                            <div className={classes.inputs}>
                                <label htmlFor='ingredient'>Ingredient</label>
                                <input 
                                type="text" 
                                required 
                                name="ingredient" 
                                placeholder="Enter ingredient's name"
                                value={ingredients.ingredient} 
                                onChange={ e => handleIngredientChange(i, e)}/>
                            </div>
                            <div className={classes.inputs}>
                                <label htmlFor="quantity">Quantity</label>
                                <input 
                                type="text" 
                                required 
                                name="quantity"
                                placeholder="Enter ingredient's quantity"
                                value={ingredients.quantity}
                                onChange={e => handleIngredientChange(i, e)}/>
                            </div>
                        </div> 
                        )
                    })
                }
                </div>
                
                <button type="submit" onClick={addMoreHandler} className={classes.addRecipeBtn}>Add more</button>
                <div className={classes.inputs}>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea name="instructions" required id="instructions" cols="20" rows="7" value={instructions} onChange={inputHandler}></textarea>
                </div>
                <button type="submit" id='send' className={classes.addRecipeBtn}>Submit recipe</button>
            </div>
        </form>
    )
}

export default Add;