import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Form,Button,Container, Row, Col } from 'react-bootstrap';
import {useHistory} from 'react-router'
import './addRecipe.css'
import SubHeader from '../header/SubHeader'
export default function AddRecipe() {
    const [data, setData] = useState({
        id:uuidv4(),
        author:"",
        name: "",
        catagory:"",
        causine:"",
        preptime:"",
        cooktime:"",
        yield:"",
        keyWords:"",
        description: "",
        ingredients:[{}],
        steps:[{}],
        image:[''],
      });
      const [ingredients, setIngredients] = useState([{ id: 1, ingName: "", quantity: "" }])
      const [steps, setSteps] = useState([{ id: 1, desc: "", img: "" },])
      const [imgs, setImgs] = useState([""])

    const history = useHistory()

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
        axios.post("https://json-recipes-server.herokuapp.com/recipes", data)
        //axios.post("http://localhost:3001/recipes", data)
        .then( response=> {
            history.push(`/recipes/${data.id}`)
        } )
      };
        


    return (
            <>
                <SubHeader 
                    title = "Add a cool recipe! "
                    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'!"
                />
                <Container fluid >                 
                <Form  onSubmit={submitData}>
                    <Row >
                        <Col className='input_col1 bg-light text-dark' xs={12} md={5} lg={4}>
                            <Form.Group>
                                <Form.Label htmlFor = "author">author</Form.Label>
                                <Form.Control type="ctext" id= "author" name= "author" placeholder = "Name of author" onChange ={formChangeHandler}  required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "name">Recipe name *</Form.Label>
                                <Form.Control id = 'name' type="text" name= "name" placeholder = "Name of recipe" onChange ={formChangeHandler}  required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "catagory">Catagory</Form.Label>
                                <Form.Control type="text" id= "catagory" name= "catagory" placeholder = "i.e. dinner,lunch,deserts"  onChange ={formChangeHandler}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "causine">causine</Form.Label>
                                <Form.Control type="text" id= "causine" name= "causine" placeholder = "Indian, asian"  onChange ={formChangeHandler}  />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor = "preptime">Preparation time</Form.Label>
                                <Form.Control type="number" id= "preptime" name= "preptime" placeholder = "Preparation time in minutes"  onChange ={formChangeHandler} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor = "cooktime">Cook time *</Form.Label>
                                <Form.Control type="number" id= "cooktime" name= "cooktime" placeholder = "cooking time in minutes" required onChange ={formChangeHandler}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "yield">Yield</Form.Label>
                                <Form.Control type="text" id= "yield" name= "yield" placeholder = "persons served"  onChange ={formChangeHandler} />
                            </Form.Group>                        
                            <Form.Group>
                                <Form.Label htmlFor = "description">Description *</Form.Label>
                                <Form.Control type="text" name= "description" rows = {3} as ="textarea" required  placeholder = "short description"  onChange ={formChangeHandler} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor = "keywords">Key words</Form.Label>
                                <Form.Control type="textarea" id= "keywords" name= "keywords" placeholder = "i.e. curry,chicken,asian"  onChange ={formChangeHandler} />
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
                                            <Form.Control type="text" name="img" onChange={(e) => changeImgsData(e, i)} />
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
                                            <Form.Control type="text" name="ingName" onChange={(e) => changeIngData(e, i)} />
                                        </Col>
                                        <Col>
                                            <Form.Label htmlFor="">Quantity</Form.Label>
                                            <Form.Control type="text"  name="quantity" onChange={(e) => changeIngData(e, i)}/>
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
                                                <Form.Label htmlFor="desc">{`Step ${i+1} : Description`}  </Form.Label>
                                                <Form.Control type="text"  name="desc" rows = {3} as ="textarea"  onChange={(e) => changeStepsData(e, i)}/>
                                            </Col>
                                            <Col>
                                                <Form.Label htmlFor="img">Image</Form.Label>
                                                <Form.Control type="text" name="img" onChange={(e) => changeStepsData(e, i)} />
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
                        <Button type="submit" variant="success" value="Send data">Submit</Button>
                    </Row>
               </Form>
            </Container>
           </>
    )
}
