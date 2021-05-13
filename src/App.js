import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react'

import './App.css'
import Header from './components/header/Header'
import Main from '../src/components/main/Main'
import Footer from '../src/components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = ()=> {
    return (
      <Router>
        <div className="App" >       
              <Header/>
              <Main/>
              <Footer/>       
        </div>
      </Router>
    );
  };


export default App;

