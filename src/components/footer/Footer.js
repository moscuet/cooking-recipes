import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import {Link }from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
function Footer() {
  return (
    <footer>
      <Container>
      <Row>
          <Col xs ={12} sm = {6} md ={6} lg={3}>
     
            <ul >
              <h3>Quick links</h3>
              <li><Link to='/'>Home</Link></li>
              <li ><Link to='/recipes'>Recipies</Link></li>
              <li><Link to='/about'>About</Link></li>               
            </ul>
          </Col>
              
          <Col xs ={12} sm = {6}md ={6}lg={3}>
            
            <ul>
              <h3>Policy</h3>
              <li>Privacy</li>
              <li>Terms & conditions</li>
              <li>Cooking policy</li>
            </ul>
          </Col>

          <Col className ='social_icons' xs ={12} sm = {6} md={6}lg={3}>
              <h3>Flollow us</h3>
             <Row>
                <Col xs={12} md={4}><a href="https://www.facebook.com/" class="fa fa-facebook fa-2x" ><span>f</span></a> </Col>
                <Col xs={12} md={4}><a href="https://twitter.com" class="fa fa-twitter fa-2x"><span>twitter</span></a> </Col>
                <Col xs={12} md={4}><a href="https://www.instagram.com/" class="fa fa-instagram fa-2x"><span>instagram</span></a> </Col>
              </Row>
          </Col>

          <Col xs ={12} sm ={6} md = {6}lg={3}>
          
          <h3>News letter</h3>
          </Col>
        </Row>

        <Row>

            
  
          
          
        
        </Row> 
         
      </Container>
      <div class="copyright text-center">
        Copyright &copy; 2017 <span>Rahman</span>
      </div>
    </footer>
    );
  }
  export default Footer 