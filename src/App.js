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
     console.log(recipe)
     return recipe.name.toUpperCase().includes(userInput.toUpperCase())
   })
   this.setState({searchedRecipes:filteredRecipes})
   //this.setState({serachedWord: e.tarrget['name'].value})
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
          <Main  recipes = {this.state.searchedRecipes} inputHandler = {this.inputHandler}/>
          <Footer/>
        </Router>
      </div>
     
    );
  }
}

export default App;

