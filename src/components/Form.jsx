import React from 'react';

const Form = ({submit, inputHandler, recipeName, author, description, ingredient, quantity, more, post}) => {
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
                <div className=''>
                    <div>
                        <label htmlFor="ingredient">Ingredient</label>
                        <input type="text" name="ingredient" id="ingredient" value={ingredient} onChange={inputHandler}/>
                    </div>
                    <div>
                    <label htmlFor="quantity">Quantity</label>
                        <input type="text" name="quantity" id="quantity" value={quantity} onChange={inputHandler}/>
                    </div>
                </div>
                <button type="submit" onClick={more}>more</button>
                <button type="submit" id='send' onClick={post}>Add</button>
            </form>
    )
}

export default Form;