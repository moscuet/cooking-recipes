import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import {Button, Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock , faUtensils} from '@fortawesome/free-solid-svg-icons'
import'./singleRecipe.css'
export default function SingleRecipe() {


    const [recipe, setrecipe] = useState();
   const  {id} = useParams()
   useEffect(() => {
        if(!recipe){
            axios.get(`https://json-recipes-server.herokuapp.com/recipes/${id}`)
            .then( response => setrecipe(response.data))
        }
    }) 
    const deleteRecipe = () =>{
        if(window.confirm('Are you sure you want to delete?')){
            axios.delete(`https://json-recipes-server.herokuapp.com/recipes/${id}`)
            .then ( response => window.location.replace('https://json-recipes-server.herokuapp.com/recipes') )
        }
    }
       
   const ingredientsList = () => recipe.ingredients.map( ing =><li key = {ing.id}>- {ing.quantity} {ing.ingName}</li>)
    const stepsList = () =>  recipe.steps.map( (step,i) => <div key = {step.id}><h5>Step {i+1}</h5>{step.desc}</div>)
     const imgList = () =>recipe.image.map( (im,i)=> <div key = {i} className = "img_div"> <img src={im} alt ={`recipe pic number ${i}`}/> </div>)
    let data = undefined
    if(!recipe){
        data= <p> Loading data..</p>
        }
        else{ 
            data =  <div className = "single-recipe-wrapper">
                        <Container fluid>
                            <Row  >
                                <Col xs ={12} md ={7} lg ={7}>
                                    <div  className= 'imgs'> {imgList()}</div>
                                </Col>
                                <Col xs={12} md ={4} lg ={4}>
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
                                    <h3>Ingredients</h3>
                                    <h4>For the {recipe.name}</h4>
                                    <ul>{ingredientsList()}</ul>
                                </Col>
                                <Col className = "steps_container" xs ={12} md ={6}>
                                    <h3>Cooking Methods</h3>
                                    <div className="steps_div">{stepsList() }</div>
                                </Col>
                            </Row>
                            <Row> 
                                <div className ="button_div">
                                    <Link to = {`/recipes`}><Button  variant="secondary" value="Send data">Go back</Button></Link> 
                                    <Link to = {`/editRecipe/${id}`}><Button variant="warning" >edit</Button></Link>  
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