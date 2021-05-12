import Logo from './logo.svg';
import React from 'react'
import styles from './navBar.module.scss'
import {Row, Navbar, Nav, Form,FormControl,Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import './navLink.css'
export default function NavBar() {
    return (
        <Row>
            <Navbar className={`${styles.navbarDiv} text-primary`} bg="white" 
             expand="lg">
            <Navbar.Brand >
               <NavLink to = '/'>
                <img
                    src={Logo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="logo"
                    />
               </NavLink>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
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
                    <NavLink to="/addrecipe">Add new</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                    <NavLink to="/login">Login</NavLink>
                    </li>
                 </ul>                 
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>            
        </Row> 
    )
}
