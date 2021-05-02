import {BrowserRouter as Router} from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

import Header from './components/header/Header'
import Main from '../src/components/main/Main'
import Footer from '../src/components/footer/Footer'




class App extends Component {

  state ={
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
  }
searchInputHandler = (e) =>{
   const userInput = e.target.value
   let allRecipes = [...this.state.recipes]
   let filteredRecipes = allRecipes.filter( recipe =>{
     console.log(recipe)
     return recipe.name.toUpperCase().includes(userInput.toUpperCase())
   })
   this.setState({searchedRecipes:filteredRecipes})
}

formChangeHandler = (e)=> {
  let newRecipe = {...this.state.newRecipe,[e.target.name]:e.target.value}
  this.setState({...this.state,newRecipe})
}

formSubmitHandler =(e) =>{
  e.preventDefault()
  axios.get('http://localhost:3001/?path=recipes')
     .then( res =>{
       console.log(res.data)
     })



     //fetch("http://localhost:3001/?path=recipes")
     // .then(res =>res.json())
     // .then( data =>console.log(data))

  // const requestOptions = {
  //   method:"GET",
  //   headers:{"content-type":"application/json"},
  //  //body: JSON.stringify(this.state.newRecipe)//{note:this.state.userInput}
  // };
  // fetch("http://localhost:3001/?path=recipes",requestOptions)
  // .then(res =>res.json())
  // .then( data =>console.log(data))

}

  componentDidMount(){
     axios.get('https://sheltered-thicket-21153.herokuapp.com/https://public.bc.fi/s2100146/php/server_recipe/?path=recipes')
     .then( res =>{
       this.setState({recipes:res.data, searchedRecipes:res.data})
     })
  }

  render() {
    return (
      <div>
        
         <Router>
          <Header/>
          <Main  
            recipes = {this.state.searchedRecipes} 
            inputHandler = {this.searchInputHandler}
            formSubmit = {this.formSubmitHandler}
            formChangeHandler = {this.formChangeHandler}
          />
          <Footer/>
        </Router>
      </div>
     
    );
  }
}

export default App;


//const requestOptions = {
  //   method:"GET",
  //   mode: 'no-cors',
  //   headers:{
  //     "content-type":"application/json",
  //     "Access-Control-Allow-Origin":"*"
  //       }
  // };
