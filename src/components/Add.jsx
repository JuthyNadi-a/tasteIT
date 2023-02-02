import axios from 'axios';
import React  from 'react';
import { useState } from 'react';
import Form from './Form';

const Add = () => {
    const [recipes, setRecipes] = useState({
        recipeName: '', 
        author: '', 
        description: '', 
        ingredient: '', 
        quantity: ''
    });

    const inputHandler = (e) => {
        setRecipes({...recipes, [e.target.name]: e.target.value})
    };
    const submitHandler = (e) => {
        console.log('entered');
        e.preventDefault();
       axios.post("http://localhost:3007/recipes", {...recipes})
       .then((res)=> {
            console.log('data from post',(res.data));
       })
       .catch((error) => console.log(error));
    }
    return (
        <div>
            <p>Add more recipes</p>
            <Form 
            inputHandler={inputHandler}
            post={submitHandler}
            {...recipes}/>
        </div>
    );
};

export default Add;