import React, {component} from "react";
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Regis from './signup';


const Form = () => {
    return(
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <form class="box login">
                        <h1>Login</h1>
                        <p class="text-muted"> Please enter your login and password!</p>
                         <input type="email" name="" placeholder="Enter Your Email" required></input>
                          <input type="password" name="" placeholder="Enter Password" required></input>
                            
                           <input type="submit" name="" value="Login" href="#"></input>
                           <a class="forgot text-muted" href="#">Forgot password?</a>   
                           <p >Don't Have any Account</p>
                           <a  href="sign-up">Sign up?</a> 
                           
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
    )

}



export default Form;