import React from 'react';

const Form = ({submit, inputHandler, recipeName, author, recipeCountry, description}) => {
    return (
            <form className='content' onSubmit={submit}>
                <div className='inputs recipeName'>
                    <label htmlFor="recipeName">Recipe name</label>
                    <input type="text" name="recipeName" id="recipeName" value={recipeName} onChange={inputHandler}/>
                </div>
                <div className='inputs author'>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={author} onChange={inputHandler}/>
                </div>
                <div className='inputs'>
                    <label htmlFor="recipeCountry">Country</label>
                    <input type="tel" name="recipeCountry" id="recipeCountry" value={recipeCountry} onChange={inputHandler}/>
                </div>
                <div className='inputs'>
                    <label htmlFor="countryFlag">Country flag</label>
                    <select name='countryFlag' id="countryFlag" onChange={inputHandler} defaultValue="choice">
                        <option value="choice" disabled>Choose a option</option>
                        {/* <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option> */}
                    </select>
                </div>
                <div className='inputs'>
                    <label htmlFor="mesage">Description</label>
                    <textarea name="description" id="description" cols="20" rows="7" value={description} onChange={inputHandler}></textarea>
                </div>
                <button type="submit" id='send'>Add</button>
            </form>
    )
}

export default Form;