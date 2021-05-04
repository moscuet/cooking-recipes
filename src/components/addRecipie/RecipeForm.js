import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    desc: "",
    inc: [],
    dir: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, incName: "", quantity: "" },
  ]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[i][name] = value;
    setIngredients(list);
    setData({ ...data, inc: ingredients });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newInc = { id: ingredients.length + 1, incName: "", quantity: "" };
    setIngredients([...ingredients, newInc]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recipies", data);
  };

  return (
    <Form onSubmit={submitData}>
      <Form.Group>
        <Form.Label htmlFor="">Name</Form.Label>
        <Form.Control type="text" name="name" onChange={changeData} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="desc"
          onChange={changeData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Image</Form.Label>
        <Form.Control type="text" name="image" onChange={changeData} />
      </Form.Group>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label htmlFor="">Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="quantity"
                    onChange={(e) => changeIncData(e, i)}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="">Ingredient</Form.Label>
                  <Form.Control
                    type="text"
                    name="incName"
                    onChange={(e) => changeIncData(e, i)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>
        );
      })}

      <Button variant="outline-success" onClick={addMore}>
        add more
      </Button>
      <Form.Group>
        <Form.Label>Directions</Form.Label>
        <Form.Control as="textarea" rows={3} name="dir" onChange={changeData} />
      </Form.Group>
      <Button type="submit" variant="success" value="Send data">
        Post recipe
      </Button>
    </Form>
  );
};

export default RecipeForm;
