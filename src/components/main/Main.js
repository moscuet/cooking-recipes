import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import './main.css'

import Home from '../home/Home'
import Recipes from '../recipes/Recipes'
import About from '../about/About'

const Main = () => {
  return (
    <div className = 'main_div'>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/recipes" component={Recipes}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </div>
  );
};

export default Main;