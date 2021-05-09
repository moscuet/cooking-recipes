import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {Link,useRouteMatch} from 'react-router-dom'
import {Button, Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock , faUtensils} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';


import'./singleRecipe.css'
export default function SingleRecipe() {
    const [recipe, setrecipe] = useState();
    //const [toHome, setToHome] = useState(false)
   const  {id} = useParams()
   let {url} = useRouteMatch()
  console.log(url)
   useEffect(() => {
        if(!recipe){
            axios.get(`http://localhost:3001/recipes/${id}`)
            .then( response => setrecipe(response.data))
        }
    }) 
    const deleteRecipe = () =>{
        if(window.confirm('Are you sure you want to delete?')){
            axios.delete(`http://localhost:3001/recipes/${id}`)
            .then ( response => window.location.replace('http://localhost:3000/recipes') )
        }
    }
       
    const ingredientsList = () => recipe.ingredients.map( ing =><li>- {ing.quantity} {ing.ingName}</li>)
    const stepsList = () =>  recipe.steps.map( (step,i) => <div><h4>Step {i+1}</h4>{step.desc}</div>)

    let data = undefined
    if(!recipe){
        data= <p> Loading data..</p>
        }
        else{ 
            data =  <div className = "container-wrapper">
                        <Container fluid>
                            <Row className ='test' >
                                <Col xs ={12} md ={6} lg ={4}>
                                    <div className = "img_div"><img src={recipe.image[0]} alt ='recipe pic'/></div>
                                </Col>
                                <Col xs={12} md ={6} lg ={8}>
                                    <h1>{recipe.name}</h1>
                                    <p style ={{color:'green'}}>{recipe.author? 'By '+recipe.author:''}</p>
                                    <Row>
                                        <Col>
                                        <FontAwesomeIcon icon={faClock} size="2x"/>
                                        <p>  Prep: {recipe.preptime} mins</p> 
                                        <p>cook:{recipe.cooktime} mins </p>
                                        </Col>
                                        <Col> 
                                            <p style = {{fontSize: 24}}><FontAwesomeIcon icon={faUtensils} /> {recipe.serve}</p>
                                        </Col>
                                    </Row>
                                    <p>{recipe.description}</p>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs ={12} md ={6}>
                                    <h2>Ingredients</h2>
                                    <h4>For the {recipe.name}</h4>
                                    <ul>{ingredientsList()}</ul>
                                </Col>
                                <Col classname = "steps_container" xs ={12} md ={6}>
                                    <h2>Cooking Methods</h2>
                                    <div className="steps_div">{stepsList() }</div>
                                </Col>
                            </Row>
                            <Row> 
                                <div className ="button_div">
                                    <Link to = {`/editRecipie/${id}`}><Button variant="warning" >edit</Button></Link>  
                                    <Button variant="danger" onClick = {deleteRecipe}>delete</Button>                           
                                </div>  
                            </Row>
                        </Container>    
                    </div>
        }
   return <div>
            {/* {toHome? <Redirect to ="/"/> : null} */}
            {data}
         </div>
}