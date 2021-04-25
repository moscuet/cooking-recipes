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
     axios.get('https://sheltered-thicket-21153.herokuapp.com/https://public.bc.fi/s2100146/php/server_recipe/?path=recipes')
     .then( res =>{
       console.log(res.data)
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

