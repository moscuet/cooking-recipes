import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

export default function SingleRecipe() {
    const [recipe, setrecipe] = useState();
   const  {id} = useParams()
   useEffect(() => {
        if(!recipe){
            axios.get(`http://localhost:3001/recipes/${id}`)
            .then( response => setrecipe(response.data))
        }
    }) 
   
        let data = undefined
        if(!recipe){
        data= <p> Loading data..</p>
        }
        else{ 
            data =  <div>
                        <h1>{recipe.name}</h1>
                        <p>{recipe.description}</p>
                        <img src={recipe.image[0]} alt ='recipe pic'/>
                   </div>
        }
   return <div>{data}</div>
}