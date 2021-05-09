import React from 'react'
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import './recipeCard.css'
export default function SearchRecipes({inputHandler}) {
    const SearchBar = styled.section`
        min-width: 300px;
        width:30%;
    `;
    return (
        <SearchBar>
            <Form.Group>
                <Form.Label htmlFor = "search"></Form.Label>
                <Form.Control type="text" name = 'search' placeholder="Search recipies" className="mr-sm-2" onChange = {inputHandler} />
            </Form.Group>  
        </SearchBar>
    )
}


// npm install --save styled-components
