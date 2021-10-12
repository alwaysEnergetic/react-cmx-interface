import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';
import {Button} from '@workday/canvas-kit-react-button';
import { FaUser, FaLock } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";


import "../../src/App.css";

const Login = () => {
    const classes = useStyles();
    return (
        <div className="loginPage">
            <div className="loginTop">
                <div className="loginLogo">
                    <div id="cmx">
                        CMx
                    </div>
                    <div id="description">
                        Expert partner in your growth
                    </div>
                </div>
                <div className="loginTitle">
                    Contract Management System
                </div>
            </div>
            <div className="loginContent">
                <div>
                    <div className="loginInfoMessage">
                        Please Enter Your Information
                    </div>
                    <div>
                        <div className="email" >
                            <FormField className="form-group position-relative" inputId="my-input-field">
                            <TextInput className="form-control input-lg rounded-lg inputUserName" placeholder="Email:" />
                            <FaUser className="position-absolute customize" />
                            </FormField>
                        </div>
                        <div className="password" >
                            <FormField className="form-group position-relative" inputId="my-input-field">
                            <TextInput className="form-control input-lg rounded-lg inputPassword" placeholder="Password:" />
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
    );
};
export default Login;

const useStyles = makeStyles((theme) => ({
   
}));
