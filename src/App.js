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
  }
inputHandler = (e) =>{
   const userInput = e.target.value
   let allRecipes = [...this.state.recipes]
   let filteredRecipes = allRecipes.filter( recipe =>{
     return recipe.name.includes(userInput)

     //this.setState({searchedRecipes:filteredRecipes})
   })
   this.setState({searchedRecipes:filteredRecipes})
   //this.setState({serachedWord: e.tarrget['name'].value})
}
searchedHandler = (input) =>{
  console.log(input)
  console.log('from searchhandler',this.state.recipes)
}
  componentDidMount(){
     axios.get('https://sheltered-thicket-21153.herokuapp.com/https://public.bc.fi/s2100146/php/server_recipe/?path=recipes')
     .then( res =>{
       this.setState({recipes:res.data, searchedRecipes:res.data})
     })
  }

  render() {
    this.searchedHandler();
    return (
      <div>
        
         <Router>
          <Header/>
          <Main  recipes = {this.state.searchedRecipes} inputHandler = {this.inputHandler}/>
          <Footer/>
        </Router>
      </div>
     
    );
  }
}

export default App;

