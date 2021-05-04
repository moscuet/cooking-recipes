import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function AddRecipe() {
    const [data, setData] = useState({
        author:"",
        name: "",
        catagory:"",
        cuisine:"",
        preptime:"",
        cooktime:"",
        yield:"",
        KeyWords:"",
        desc: ""
      });
      const [ingredients, setIngredients] = useState([])
      const [steps, setSteps] = useState([])


   
    
      const formChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const changeIngData = (e, i) => {
        const { name, value } = e.target;
        const list = [...ingredients];
        list[i][name] = value;
        setIngredients(list);
        setData({ ...data, ing: ingredients });
      };
    
      const addMore = (e, i) => {
        e.preventDefault();
        const newIng = { id: ingredients.length + 1, ingName: "", quantity: "" };
        setIngredients([...ingredients, newIng]);
      };
    
      const submitData = (e) => {
        axios.post("http://localhost:3001/recipies", data);
      };
        
    
    
    
    
    return (
            <Form onSubmit={submitData}>
                 <Form.Group>
                    <Form.Label htmlFor = "author">author</Form.Label>
                    <Form.Control type="ctext" id= "author" name= "author" onChange ={formChangeHandler}  />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor = "name">Name</Form.Label>
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

                <Form.Group>
                    <Form.Label htmlFor = "image"></Form.Label>
                    <Form.Control type="text" id= "image" name= "image"  />
                    <button>Add Image</button>
                </Form.Group>
               
                <p>Ingredients</p>
                {ingredients.map((_, i) => {
                    return (
                    <div key={i}>
                        <Form.Group>
                        <Row>
                            <Col>
                            <Form.Label htmlFor="">Quantity</Form.Label>
                            <Form.Control
                                type="text"
                                name="quantity"
                                onChange={(e) => changeIngData(e, i)}
                            />
                            </Col>
                            <Col>
                            <Form.Label htmlFor="">Ingredient</Form.Label>
                            <Form.Control
                                type="text"
                                name="incName"
                                onChange={(e) => changeIngData(e, i)}
                            />
                            </Col>
                        </Row>
                        </Form.Group>
                    </div>
                    );
                })}

                <button variant="outline-success" onClick={addMore}>Add ingredient</button>

                <Form.Group>
                    <p>Steps</p>
                    <Form.Label htmlFor = "stepname">Name</Form.Label>
                    <Form.Control type="text" className= "step" name= "stepname"  />
                    <Form.Label htmlFor = "text">Text</Form.Label>
                    <Form.Control type="text" className= "step" name= "text"  />
                    <Form.Label htmlFor = "stepimage">Image URL</Form.Label>
                    <Form.Control type="text" className= "step" name= "stepimage"  />
                    <button>add step</button>
                </Form.Group>                
                <Button type="submit" variant="success" value="Send data">Post recipe</Button>
            </Form>
    )
}
