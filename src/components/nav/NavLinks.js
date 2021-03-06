import React from "react";
import { NavLink } from "react-router-dom";
import './navLink.css'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/addrecipe">Add Recipie</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
        <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export  default Nav;