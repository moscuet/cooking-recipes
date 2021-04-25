import React from 'react'

export default function SearchRecipes({inputHandler}) {
    return (
        <div className = 'form'>
             <label htmlFor='search' >Search Recipie </label>
            <input type = 'text' name = 'search' id= 'search' onChange = {inputHandler}/>
           
        </div>
    )
}
