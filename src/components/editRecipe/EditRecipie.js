import React, { useState , useEffect} from "react";
import axios from "axios";
import { Form,Button,Container, Row, Col } from 'react-bootstrap';
import { useParams} from 'react-router'
import {Link} from 'react-router-dom'
import './editRecipe.css'
import { withRouter } from "react-router-dom";

import { useHistory } from "react-router-dom";



function EditRecipe(props) {





    let {id} = useParams()
    const [data, setData] = useState({
        id:"",
        author:"",
        name: "",
        catagory:"",
        cuisine:"",
        preptime:"",
        cooktime:"",
        yield:"",
        keywords:"",
        description: "",
        ingredients:[{ id: 1, ingName: "asdsd", quantity: "sad" }],
        steps:[{ id: 1, desc: "dsd", img: "dsad" }],
        image:['sample.com'],
      });
      const [ingredients, setIngredients] = useState([{ id: 1, ingName: "sfs", quantity: "dsfs" }])
      const [steps, setSteps] = useState([{ id: 1, desc: "sfs", img: "sfsf" },])
      const [imgs, setImgs] = useState(["sdsdsd.com"])
      useEffect( ()=>{
        const getData = async () =>{
          //axios.get('https://sheltered-thicket-21153.herokuapp.com/https://public.bc.fi/s2100146/php/server_recipe/?path=recipes')
          axios.get('https://json-recipes-server.herokuapp.com/recipes')
         .then( response =>{
             console.log('singledata',response.data)
            let targetRecipe = response.data.filter( recipe=> recipe.id===id)[0]
            console.log(targetRecipe)
            setData(targetRecipe)
            setIngredients(targetRecipe.ingredients)
            setSteps(targetRecipe.steps)
            setImgs(targetRecipe.image)
         })
        }
        getData();
        }, [id]);
    
      const formChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const changeIngData = (e, i) => {
        const { name, value } = e.target;
        const list = [...ingredients];
        list[i][name] = value;
        setIngredients(list);
        setData({ ...data, ingredients,image:imgs,steps });
      };

      const changeStepsData = (e, i) => {
        const { name, value } = e.target;
        const list = [...steps];
        list[i][name] = value;
        setSteps(list);
        setData({ ...data, steps: steps });
      };
      const changeImgsData = (e,i) => {
       imgs[i]=e.target.value
       setData({ ...data, image: imgs });
      };


      const addIngredient = (e, i) => {
        e.preventDefault();
        const newIng = { id: ingredients.length + 1, ingName: "", quantity: "" };
        setIngredients([...ingredients, newIng]);
      };      
      const addStep = (e, i) => {
        e.preventDefault();
        const newStep = { id: steps.length + 1, desc: "", img:"" };
        setSteps([...steps, newStep]);
      };
      const addImage = (e, i) => {
        e.preventDefault();
        setImgs([...imgs, '']);
      };

      const submitData = (e) => {
          e.preventDefault()
         axios.put(`https://json-recipes-server.herokuapp.com/recipes/${id}`, data)
         //.then( <Redirect to = '/'/>) 
         //.then(props.history.push(`/recipes/${id}`))
         .then( response=> window.location.replace(`/recipes/${id}`) )
      };
        //window.location.replace(`https://vigilant-swirles-3f103b.netlify.app/recipes/${id}`
    
    return (
            <Container fluid > 
                <Form onSubmit={submitData}>                            
                    <Row>
                        <Col   className='input_col1 bg-light text-dark' xs={12} md={5} lg={4}>
                            <Form.Group>
                                <Form.Label htmlFor = "author">author</Form.Label>
                                <Form.Control type="text" id= "author"  name= "author" value = {data.author} onChange ={formChangeHandler}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "name">Recipe name</Form.Label>
                                <Form.Control id = 'name' type="text"  name= "name" value = {data.name} onChange ={formChangeHandler}  required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "catagory">Catagory</Form.Label>
                                <Form.Control type="text" id= "catagory" name= "catagory" value = {data.catagory}  onChange ={formChangeHandler}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "cuisine">Cuisine</Form.Label>
                                <Form.Control type="text" id= "cuisine" name= "cuisine" value = {data.cuisine}  onChange ={formChangeHandler}  />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor = "preptime">Preparation time</Form.Label>
                                <Form.Control type="number" id= "preptime" name= "preptime" value = {data.preptime}  onChange ={formChangeHandler} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor = "cooktime">Cook time</Form.Label>
                                <Form.Control type="number" id= "cooktime" name= "cooktime" value = {data.cooktime} onChange ={formChangeHandler}  />
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label htmlFor = "yield">Yield</Form.Label>
                                <Form.Control type="text" id= "yield" name= "yield" value = {data.yield}  onChange ={formChangeHandler} />
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label htmlFor = "description">Description</Form.Label>
                                <Form.Control type="text" name= "description" rows = {3} as ="textarea" value = {data.description}  onChange ={formChangeHandler} />
                            </Form.Group>   
                            <Form.Group>
                                <Form.Label htmlFor = "keyWords">Key words</Form.Label>
                                <Form.Control type="textarea" id= "keyWords" name= "keywords" value = {data.keywords}   onChange ={formChangeHandler} />
                                <p>Separate multiple keywords with commas.</p>
                            </Form.Group>
                        </Col>    
                        <Col className ='input_col2 bg-light text-dark' xs={12} md={7} lg={{ span: 7, offset: 1}}>
                            <h5>Add images</h5>
                            {imgs.map((_, i) => {
                                return (
                                <div key={i}>
                                    <Form.Group>
                                    <Row>
                                        <Col>
                                            
                                            <Form.Label htmlFor="img">{`Recipie image-${i+1} : url `}</Form.Label>
                                            <Form.Control type="text" name="img" value = {imgs[i]} onChange={(e) => changeImgsData(e, i)} />
                                        </Col>
                                    </Row>
                                    </Form.Group>
                                </div>
                                );
                            })}
                            <Button variant="outline-success" onClick={addImage}>Add more image</Button>

                
                            <h5>Add ingredients</h5>
                            {ingredients.map((_, i) => {
                                return (
                                <div key={i}>
                                    <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label htmlFor="ingName">{`Ingredient ${i+1} : Name`}</Form.Label>
                                            <Form.Control type="text" name="ingName" value = {ingredients[i].ingName} onChange={(e) => changeIngData(e, i)} />
                                        </Col>
                                        <Col>
                                            <Form.Label htmlFor="">Quantity</Form.Label>
                                            <Form.Control type="text"  name="quantity" value = {ingredients[i].quantity} onChange={(e) => changeIngData(e, i)}/>
                                        </Col>
                                        
                                    </Row>
                                    </Form.Group>
                                </div>
                                );
                            })}

                            <Button variant="outline-success" onClick={addIngredient}>Add more ingredient</Button>
                            <h5>Add steps</h5>
                            {steps.map((_, i) => {
                                return (
                                <div key={i}>
                                    <Form.Group>
                                        <Row>
                                            <Col>
                                                <Form.Label htmlFor="desc">{`Step ${i+1} : Description`} </Form.Label>
                                                <Form.Control type="text"  name="desc" value = {steps[i].desc} onChange={(e) => changeStepsData(e, i)}/>
                                            </Col>
                                            <Col>
                                                <Form.Label htmlFor="img">Image</Form.Label>
                                                <Form.Control type="text" name="img" value = {steps[i].img} onChange={(e) => changeStepsData(e, i)} />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </div>
                                );
                            })}
                            <Button variant="outline-success" onClick={addStep}>Add more Step</Button>
                        </Col>
                    
                    </Row>
                    <Row>
                        <Link to = {`/recipes/${id}`}><Button  variant="secondary" value="Send data">Go back</Button></Link> 
                        <Button type="submit" variant="success" value="Send data">Submit</Button> 
                    </Row>
                </Form>
            </Container> 
    )
}

export default withRouter(EditRecipe)