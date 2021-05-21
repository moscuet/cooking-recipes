import React from 'react'
import {Link} from 'react-router-dom'
import './recipeCard.css'
export default function Recipe({recipe}) {
    //const { path } = useRouteMatch();
    //let {url} = useRouteMatch()
    return (
        <div className="recipe-box">
            <Link to = {`/recipes/${recipe.id}`}>
                <div className="image-div">
                    <img src={recipe.image[0]} alt='recipie pic'/>       
                </div>
                <div className = 'img-footer'>
                    <h5> {recipe.name}</h5>
                    <p>{recipe.causine? recipe.causine+" dish":''} </p>                   
                </div>
            </Link>
        </div>
    )
}

/*

*/