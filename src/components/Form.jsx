import axios from 'axios';
import React , { useState } from 'react';


const Form = ({ name, author, description}) => {
    const [recipes, setRecipes] = useState({
        name: '', 
        author: '', 
        description: '',
        image: '',
        ingredients: [
            {ingredient: '', quantity: ''}
        ]
    });

    const [ingredients, setIngredients] = useState([
        {ingredient: '', quantity: ''}
        ])

    const inputHandler = (e) => {
        setRecipes({...recipes, [e.target.name]: e.target.value})
    };
    const handleIngredientChange = (input,event) => {
    let data = [...ingredients];
    data[input][event.target.name] = event.target.value;
    setIngredients(data);
    }

    const addMoreHandler = () => {
        let newIngredient = { ingredient: '', quantity: ''}
        setIngredients([...ingredients, newIngredient])
    }

    const submitHandler = (e) => {
        e.preventDefault();
       axios.post("http://localhost:3007/recipes", {...recipes}, {...ingredients})
       .then((res)=> {
        setRecipes(res.data);
        console.log(ingredients);
       })
    }
    return (
            <form className='content' onSubmit={submitHandler}>
                <div className='inputs name'>
                    <label htmlFor="name">Recipe name</label>
                    <input type="text" name="name" id="name" value={name} onChange={inputHandler}/>
                </div>
                <div className='inputs author'>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={author} onChange={inputHandler}/>
                </div>
                {/* <div className='inputs'>
                    <label htmlFor="countryFlag">Recipe is from</label>
                    <select name='countryFlag' id="countryFlag" onChange={inputHandler} defaultValue="choice">
                        <option value="choice" disabled>Choose a option</option>
                    </select>
                </div> */}
                <div className='inputs'>
                    <label htmlFor="mesage">Description</label>
                    <textarea name="description" id="description" cols="20" rows="7" value={description} onChange={inputHandler}></textarea>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="url" name="image" id="image" onChange={inputHandler}/>
                </div>
                <div>
                {
                    ingredients.map((input, index) => {
                        return (
                            <div className='ingredient-group' key={index}>
                            <div>
                                <label htmlFor='ingredient'>Ingredient</label>
                                <input 
                                type="text" 
                                name="ingredient" 
                                placeholder="Enter ingredient's name"
                                value={input.ingredient} 
                                onChange={ event => handleIngredientChange(index, event)}/>
                            </div>
                            <div>
                            <label htmlFor="quantity">Quantity</label>
                                <input 
                                type="text" 
                                name="quantity"
                                placeholder="Enter ingredient's quantity"
                                value={input.quantity} 
                                onChange={event => handleIngredientChange(index, event)}/>
                            </div>
                        </div> 
                        )
                    })
                }
                </div>
                {/* <div className='ingredient-group'>
                    <div>
                        <label htmlFor='ingredient'>Ingredient</label>
                        <input type="text" name="ingredient" id="ingredient" value={ingredient} onChange={inputHandler}/>
                    </div>
                    <div>
                    <label htmlFor="quantity">Quantity</label>
                        <input type="text" name="quantity" id="quantity" value={quantity} onChange={inputHandler}/>
                    </div>
                </div> */}
                <button type="submit" onClick={addMoreHandler}>more ingredients</button>
                <button type="submit" id='send' onClick={submitHandler}>Add recipe</button>
            </form>
    )
}

export default Form;