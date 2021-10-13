import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';
import {Button} from '@workday/canvas-kit-react-button';
import { FaUser, FaLock } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import logo from './logo.png';
import background from "./background.jpg"
import "../../src/App.css";

const Login = () => {
    const classes = useStyles();
    return (
        <div className="loginPage canvas" style={{ backgroundImage: `url(${background})`}} >
            <div className="loginContent canvasBackground">
                <div className="loginDesc">
                    <div>
                        <div>
                            <img src={logo}  alt="logo" className="imgSrc" />
                        </div>
                        <div className="letter">
                            Expert Partner in your growth
                        </div>
                    </div>
                </div>
                <div className="loginFo">
                    <div className="loginForm">
                        <div className="signIn">
                            Sign in
                        </div>
                        <div className="loginInfoMessage">
                            Please Enter Your Information
                        </div>
                        <div className="loginTwo">
                            <div className="email" >
                                <FormField className="form-group position-relative" inputId="my-input-field">
                                    <TextInput className="form-control input-lg rounded-lg inputUserName inputVal " placeholder="Email:" />
                                    <FaUser className="position-absolute customize" />
                                </FormField>
                                
                            </div>
                            <div className="password" >
                                <FormField className="form-group position-relative" inputId="my-input-field">
                                <TextInput className="form-control input-lg rounded-lg inputPassword inputVal" placeholder="Password:" />
                                <FaLock className="position-absolute customize" />
                                </FormField>
                            </div>
                            <div className="loginButton">
                                <div className="w-full">
                                    <Button variant={Button.Variant.Primary} className="secondaryButton">
                                        <div className="flex">
                                            Login
                                            <FiArrowRightCircle className="key"/>
                                        </div>

                                    </Button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
};
export default Login;

const useStyles = makeStyles((theme) => ({
   
}));
