import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import classes from './Details.module.css'
const Details = () => {
    const {id} = useParams();
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3007/recipes/${id}`)
        .then((res)=> {
            setRecipeDetails(res.data)
        })
    }, [id])
    return (
        <div className={classes.details_container}>
            <h1>{recipeDetails.name}</h1>
            <div className={classes.imageContainer}>
                <div>
                    <img className={classes.flag}
                    src= {recipeDetails.country}
                    alt={recipeDetails.country_name}
                    />
                </div>
                <img
                src= {recipeDetails.image}
                alt={recipeDetails.name}
                />
            </div>
            <div>
                <h3>Description : </h3>
                <p>{recipeDetails.description}</p>
            </div>
            <div>
                <h3>Ingredients: </h3>
                {
                    recipeDetails.ingredients && recipeDetails.ingredients.map((item, i) => {
                            return (
                                <div key={i}>
                                    {item.ingredient}, {item.quantity}
                                </div>
                            )
                    })
                }
            </div>
            <div>
                <h3>Instructions: </h3>
                <p>{recipeDetails.instructions}</p>
            </div>
        </div>
    );
};

export default Details;