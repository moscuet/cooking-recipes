import React, { useState , useEffect} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams} from 'react-router'
export default function EditRecipe() {
    let {id} = useParams()
    id = Number(id)
    const [data, setData] = useState({
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
      const [ingredients, setIngredients] = useState([])
      const [steps, setSteps] = useState([])
      const [imgs, setImgs] = useState([])
      useEffect( ()=>{
        const getData = async () =>{
          //axios.get('https://sheltered-thicket-21153.herokuapp.com/https://public.bc.fi/s2100146/php/server_recipe/?path=recipes')
          axios.get('http://localhost:3001/recipies')
         .then( response =>{
            let targetRecipe = response.data.filter( recipe=> recipe.id===id)[0]
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
        axios.put(`http://localhost:3001/recipies/${id}`, data)
        .then( response => window.location.replace(`http://localhost:3000/recipes/${id}`)
        )
      };
        
    
    return (
            <Form onSubmit={submitData}>
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
                    <Form.Label htmlFor = "keywords">Key words</Form.Label>
                    <Form.Control type="textarea" id= "keywords" name= "keywords" value = {data.keywords}   onChange ={formChangeHandler} />
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
                                <Form.Control type="text" name="img" value = {imgs[i]} onChange={(e) => changeImgsData(e, i)} />
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
                                <Form.Control type="text"  name="quantity" value = {ingredients[i].quantity} onChange={(e) => changeIngData(e, i)}/>
                            </Col>
                            <Col>
                                <Form.Label htmlFor="ingName">Name</Form.Label>
                                <Form.Control type="text" name="ingName" value = {ingredients[i].ingName} onChange={(e) => changeIngData(e, i)} />
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
                <Button type="submit" variant="success" value="Send data">Submit recipe</Button>
                <div></div>
            </Form>
    )
}