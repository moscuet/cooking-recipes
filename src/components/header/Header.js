import React from 'react'
import { Switch, Route} from "react-router-dom";

import Logo from './logo.svg';
import './header.css'

import Nav from '../nav/Nav'

function Header() {
    return (
      <div className = 'header'>
            <div><img src={Logo} alt = 'portfolio_logo'/></div>
            <Nav/>      
      </div>
        
       

    );
  }
  export default Header 