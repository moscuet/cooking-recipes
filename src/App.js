import {BrowserRouter as Router} from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

import Header from './components/header/Header'
import Main from '../src/components/main/Main'
import Footer from '../src/components/footer/Footer'

class App extends Component {

  state ={
    recipes:[]
  }

  componentDidMount(){
     axios.get('http://localhost:3001/recipes')
     .then( res =>{
       this.setState({recipes:res.data})
     })
    
  }
  render() {
    return (
      <Router>
        <Header/>
        <Main  recipes = {this.state.recipes}/>
        <Footer/>
      </Router>
    );
  }
}

export default App;

