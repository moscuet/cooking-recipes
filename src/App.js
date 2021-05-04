import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react'

import './App.css'
import Header from './components/header/Header'
import Main from '../src/components/main/Main'
import Footer from '../src/components/footer/Footer'



const App = ()=> {
    return (
        <Router>
          <Header/>
          <Main/>
          <Footer/>
        </Router>
    );
  };


export default App;

