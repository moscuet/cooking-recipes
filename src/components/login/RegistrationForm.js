import React, {useState} from 'react';
import axios from 'axios';
import './registrationForm.css';
//import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import SubHeader from '../header/SubHeader'
function RegistrationForm(props) {
    console.log('history',props)
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {

            //props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password
            }
            console.log(payload)
            axios.post('http://localhost:3001/users', payload)
                .then(function (response) {
                    if(response.status === 201){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        //localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        //props.showError(null)
                    } else{
                       // props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
           // props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToHome = () => {
        //props.updateTitle('Home')
        props.history.push('/login');
    }
    const redirectToLogin = () => {
       //props.updateTitle('Login')
       console.log('go to login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            //props.showError('Passwords do not match');
        }
    }
    return(
        <>
            <SubHeader
                title="Registration Form"
                text="Please check if all information are correct"
            />
            <div className ="registration">
                <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                    <form>
                        <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            value={state.email}
                            onChange={handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Password"
                                value={state.password}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" 
                                className="form-control" 
                                id="confirmPassword" 
                                placeholder="Confirm Password"
                                value={state.confirmPassword}
                                onChange={handleChange} 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={handleSubmitClick}
                        >
                            Register
                        </button>
                    </form>
                    <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                        {state.successMessage}
                    </div>
                    <div className="mt-2">
                        <span>Already have an account? </span>
                        <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
                    </div>           
                </div>
            </div>
        </>    
    )
}

export default withRouter(RegistrationForm);