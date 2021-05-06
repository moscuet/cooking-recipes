import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'

export default function SingleRecipe() {
    const [recipe, setrecipe] = useState();
    //const [toHome, setToHome] = useState(false)
   const  {id} = useParams()
   console.log('from sinle',id)
   useEffect(() => {
        if(!recipe){
            axios.get(`http://localhost:3001/recipies/${id}`)
            .then( response => setrecipe(response.data))
        }
    }) 
    const deleteRecipe = () =>{
        if(window.confirm('Are you sure you want to delete?')){
            axios.delete(`http://localhost:3001/recipies/${id}`)
            .then ( response => window.location.replace('http://localhost:3000/recipes') )
        }
    }
        let data = undefined
        if(!recipe){
        data= <p> Loading data..</p>
        }
        else{ 
            data =  <div>
                        <h1>{recipe.name}</h1>
                        <p>{recipe.description}</p>
                        <img src={recipe.image[0]} alt ='recipe pic'/>
                        <div>
                            <Link to = {`/editRecipie/${id}`}>Edit</Link> 
                            <button onClick = {deleteRecipe}>Delete</button>
                        </div>
                   </div>
        }
   return <div>
            {/* {toHome? <Redirect to ="/"/> : null} */}
            {data}
         </div>
}