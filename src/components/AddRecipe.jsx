import axios from 'axios';
import React , { useEffect, useState } from 'react';


const Add = ({ name, author, description, instructions}) => {
    const [recipes, setRecipes] = useState({
        name: '', 
        author: '', 
        flag: '',
        description: '',
        image: '',
        instructions: '',
    });
    const [countries, setCountries] = useState([]);
    const [ingredients, setIngredients] = useState([
            {ingredient: '', quantity: ''} 
    ]);

    const inputHandler = (e) => {
        setRecipes({...recipes, [e.target.name]: e.target.value})
    };
    const handleIngredientChange = (i, e) => {
        let data = [...ingredients];
        data[i][e.target.name] = e.target.value;
        setIngredients(data);
    }

    const addMoreHandler = () => {
        let newIngredient = { ingredient: '', quantity: ''}
        setIngredients([...ingredients, newIngredient])
    }
    const submitHandler = (e) => {
        e.preventDefault();
       axios.post("http://localhost:3007/recipes", {...recipes, ...ingredients})
       .then((res)=> {
           setRecipes(res.data)
           console.log(res.data)
           alert('Submitted');
        })
        setRecipes({
            name: '', 
            author: '', 
            flag: '',
            description: '',
            image: '',
            instructions: '',
        });
        setIngredients([
            {ingredient: '', quantity: ''} 
        ]);
    }
    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then((res)=> {
            const countries = res.data.map((country)=> {
                return {
                    name: country.name,
                    flag: country.flag
                };
            });
            setCountries(countries);
        })
    }, [])

    return (
            <form className='content' onSubmit={submitHandler}>
                <div className='inputs name'>
                    <label htmlFor="name">Recipe name</label>
                    <input type="text" required name="name" id="name" value={name} onChange={inputHandler}/>
                </div>
                <div className='inputs author'>
                    <label htmlFor="author">Author</label>
                    <input type="text" required name="author" id="author" value={author} onChange={inputHandler}/>
                </div>
                <div className='inputs countries'>
                    <label htmlFor="country">Recipe is from: </label>
                    <select 
                    id='country'
                    name="country">
                        <option>Select Your Country</option>
                        { countries.map((country)=> (
                            <option value={country.flag} key={country.name}>
                                {country.name}
                            </option>
                            ))
                        }
                    </select>
                </div>
                <div className='inputs'>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" required id="description" cols="20" rows="7" value={description} onChange={inputHandler}></textarea>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="url" required name="image" id="image" onChange={inputHandler}/>
                </div>
                <div>
                {
                   ingredients.map((input, i) => {
                        return (
                            <div className='ingredient-group' key={i}>
                            <div>
                                <label htmlFor='ingredient'>Ingredient</label>
                                <input 
                                type="text" 
                                required 
                                name="ingredient" 
                                placeholder="Enter ingredient's name"
                                value={input.ingredient} 
                                onChange={ e => handleIngredientChange(i, e)}/>
                            </div>
                            <div>
                            <label htmlFor="quantity">Quantity</label>
                                <input 
                                type="text" 
                                required 
                                name="quantity"
                                placeholder="Enter ingredient's quantity"
                                value={input.quantity}
                                onChange={e => handleIngredientChange(i, e)}/>
                            </div>
                        </div> 
                        )
                    })
                }
                </div>
                <button type="submit" onClick={addMoreHandler}>Add more</button>
                <div className='inputs'>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea name="instructions" required id="instructions" cols="20" rows="7" value={instructions} onChange={inputHandler}></textarea>
                </div>
                <button type="submit" id='send'>Submit recipe</button>
            </form>
    )
}

export default Add;