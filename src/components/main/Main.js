import React, { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";
import axios from 'axios'
import './main.css'
import Home from '../home/Home'
import Recipes from '../recipes/Recipes'
import SingleRecipe from '../recipes/SingleRecipe'
import About from '../about/About'
import AddRecipie from '../addRecipie/AddRecipe'
import EditRecipie from '../editRecipe/EditRecipie'
import RegistrationForm from '../login/RegistrationForm'
import Login from '../login/Login'
import ContactPage from '../contactPage/Contact'
const Main = (props) => {
  const [recipes, setRecipes] = useState([])
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const [newRecipe, setNewRecipe] = useState({
    recipes:[],
    searchedRecipes: [],
    serachedWord : '',
    newRecipe:{
      name:'',
      catagory:'',
      cuisine:'',
      pretime:0,
      cooktime:0,
      yield:0,
      datepublished:'',
      description:'',
      keywords:'',
      author:'',
      image:[],
      ingredients:[],
      steps:[]
    }
  })

  useEffect( ()=>{
    const getData = async () =>{
      //axios.get('https://sheltered-thicket-21153.herokuapp.com/https://public.bc.fi/s2100146/php/server_recipe/?path=recipes')
      axios.get('http://localhost:3001/recipes')
     .then( response =>{
      setRecipes(response.data)
      setSearchedRecipes(response.data)
     })
    }
    getData()
    },[])


  const searchInputHandler = (e) =>{
    const userInput = e.target.value
    let filteredRecipes = [...recipes].filter( recipe =>{
      return recipe.name.toUpperCase().includes(userInput.toUpperCase())
    })
    setSearchedRecipes(filteredRecipes)
  }

  const formChangeHandler = (e)=> {
    let recipe = {...newRecipe,[e.target.name]:e.target.value}
    setNewRecipe(recipe)
  }

  const formSubmitHandler =(e) =>{
    e.preventDefault()
    axios.get('http://localhost:3001/?path=recipes')
      .then( res =>{
        console.log(res.data)
      })
  }  


  return (
    <div className = 'main_div'>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path='/recipes/:id'> <SingleRecipe/></Route>
        <Route path="/recipes" render={() => (<Recipes recipes ={searchedRecipes} inputHandler = {searchInputHandler}/>)} ></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/addRecipe"><AddRecipie formSubmit = {formSubmitHandler} formChangeHandler = {formChangeHandler}/></Route>
        <Route path="/editRecipe/:id"><EditRecipie  /></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/register"><RegistrationForm/></Route>
        <Route path="/contact"><ContactPage/></Route>

      </Switch>
    </div>
  );
};

export default Main;