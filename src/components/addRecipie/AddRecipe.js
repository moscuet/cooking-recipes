import React, { useState } from "react";
import axios from "axios";
//import { uuid } from 'uuidv4'
import { v4 as uuidv4 } from 'uuid';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function AddRecipe() {
    const [data, setData] = useState({
        id:uuidv4(),
        author:"",
        name: "",
        catagory:"",
        cuisine:"",
        preptime:"",
        cooktime:"",
        yield:"",
        KeyWords:"",
        description: "",
        ingredients:[],
        steps:[],
        image:[],
      });
      const [ingredients, setIngredients] = useState([{ id: 1, ingName: "", quantity: "" },])
      const [steps, setSteps] = useState([{ id: 1, desc: "", img: "" },])
      const [imgs, setImgs] = useState([""])


   
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
        axios.post("http://localhost:3001/recipies", data)
        .then( response=> {
            console.log('post response', response.data.id)
           // e.target.reset()
        } )
      };
        
    
    
    return (
            <Form onSubmit={submitData}>
                 <Form.Group>
                    <Form.Label htmlFor = "author">author</Form.Label>
                    <Form.Control type="ctext" id= "author" name= "author" onChange ={formChangeHandler}  />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor = "name">Recipe name</Form.Label>
                    <Form.Control id = 'name' type="text" name= "name"onChange ={formChangeHandler}  required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor = "catagory">Catagory</Form.Label>
                    <Form.Control type="text" id= "catagory" name= "catagory" onChange ={formChangeHandler}  />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor = "cuisine">Cuisine</Form.Label>
                    <Form.Control type="text" id= "cuisine" name= "cuisine" onChange ={formChangeHandler}  />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor = "preptime">Preparation time</Form.Label>
                    <Form.Control type="number" id= "preptime" name= "preptime" onChange ={formChangeHandler} />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor = "cooktime">Cook time</Form.Label>
                    <Form.Control type="number" id= "cooktime" name= "cooktime" onChange ={formChangeHandler}  />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor = "yield">Yield</Form.Label>
                    <Form.Control type="text" id= "yield" name= "yield" onChange ={formChangeHandler} />
                </Form.Group>
            
                <Form.Group>
                    <Form.Label htmlFor = "description">Description</Form.Label>
                    <Form.Control type="text" name= "description" rows = {3} as ="textarea" onChange ={formChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor = "keywords">Key words</Form.Label>
                    <Form.Control type="textarea" id= "keywords" name= "keywords"  onChange ={formChangeHandler} />
                    <p>Separate multiple keywords with commas.</p>
                </Form.Group>
                
                <p>Add images</p>
                {imgs.map((_, i) => {
                    return (
                    <div key={i}>
                        <h3>{`Recipie image ${i+1} : `}</h3>
                        <Form.Group>
                        <Row>
                            <Col>
                                
                                <Form.Label htmlFor="img">Image url</Form.Label>
                                <Form.Control type="text" name="img" onChange={(e) => changeImgsData(e, i)} />
                            </Col>
                        </Row>
                        </Form.Group>
                    </div>
                    );
                })}
                <Button variant="outline-success" onClick={addImage}>Add more image</Button>

               
                <p>Add ingredients</p>
                {ingredients.map((_, i) => {
                    return (
                    <div key={i}>
                        <h3>{`Ingredient ${i+1} : `}</h3>
                        <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label htmlFor="">Quantity</Form.Label>
                                <Form.Control type="text"  name="quantity" onChange={(e) => changeIngData(e, i)}/>
                            </Col>
                            <Col>
                                <Form.Label htmlFor="ingName">Name</Form.Label>
                                <Form.Control type="text" name="ingName" onChange={(e) => changeIngData(e, i)} />
                            </Col>
                        </Row>
                        </Form.Group>
                    </div>
                    );
                })}

                <Button variant="outline-success" onClick={addIngredient}>Add more ingredient</Button>
                <p>Add steps</p>
                {steps.map((_, i) => {
                    return (
                    <div key={i}>
                        <Form.Group>
                        <h3>{`Step ${i+1} : `}</h3>
                        <Row>
                            <Col>
                                <Form.Label htmlFor="desc">Description </Form.Label>
                                <Form.Control type="text"  name="desc" onChange={(e) => changeStepsData(e, i)}/>
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


                <Form.Group>
                    <Form.Label htmlFor = "image"></Form.Label>
                    <Form.Control type="text" id= "image" name= "image"  />
                </Form.Group>
                <Button type="submit" variant="success" value="Send data">Submit recipe</Button>

            </Form>
    )
}
