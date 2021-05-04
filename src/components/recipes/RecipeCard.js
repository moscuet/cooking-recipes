import React from 'react'
import {Link} from 'react-router-dom'
import './recipeCard.css'
export default function Recipe({recipe}) {
    return (
        <div className="recipe-box">
            <Link to = {`recipes/${recipe.id}`}>
                <div className="image-div">
                    <img src={recipe.image[0]} alt='recipie pic'/>
                </div>
                <p>{recipe.name}</p>
            </Link>
            {/* <Link to = {`recipes/${recipe.id}`}>Read more...</Link> */}
        </div>
    )
}

/*

*/