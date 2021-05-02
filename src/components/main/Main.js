import React from "react";
import { Switch, Route} from "react-router-dom";
import './main.css'

import Home from '../home/Home'
import Recipes from '../recipes/Recipes'
import About from '../about/About'
import AddRecipie from '../addRecipie/AddRecipe'
const Main = (props) => {
   //console.log('props from main',props.recipes)
   
  return (
    <div className = 'main_div'>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/recipes" render={() => (<Recipes {...props}  />)} ></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/addRecipie"><AddRecipie {...props}/></Route>

      </Switch>
    </div>
  );
};

export default Main;