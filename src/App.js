import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react'

import './App.css'
import Header from './components/header/Header'
import Main from '../src/components/main/Main'
import Footer from '../src/components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = ()=> {
    return (
      <div className="App" >
          <Router>
            <Header/>
            <Main/>
            <Footer/>
          </Router>
      </div>
    );
  };


export default App;

