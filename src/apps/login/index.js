import React, {useState} from "react";
import logo from './logo.png';
import background from "./background.jpg"
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import {Button} from '@workday/canvas-kit-react-button';
import { FaUser, FaLock } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import {doLogin} from '../../store/loginSlice'



const Login = () => {
     const [state, setState] = useState({
         email:"",
         password:""
     })
    const classes = useStyles();
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(doLogin({
            "clientId" : "7dc53df5-703e-49b3-8670-b1c468f47f1f",    
            "redirectUri" : "https://live.contractexperience.com/CMx_API/2.0/oauth2/redirect",
            "domainName" : "live",
            "email" : "cmx@sysintellects.com",
            "password" : "CMx187806"
        }))
    }
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
                                    <TextInput className="form-control input-lg rounded-lg inputUserName inputVal " type="email" placeholder="Email:" onChange={(e)=>setState({...state, email:e.target.value})}/>
                                    <FaUser className="position-absolute customize" />
                                </FormField>
                                
                            </div>
                            <div className="password" >
                                <FormField className="form-group position-relative" inputId="my-input-field">
                                <TextInput className="form-control input-lg rounded-lg inputPassword inputVal" type="password" placeholder="Password:" onChange={(e)=>setState({...state, password:e.target.value})}/>
                                <FaLock className="position-absolute customize" />
                                </FormField>
                            </div>
                            <div className="loginButton">
                                <div className="w-full">
                                    <Button variant={Button.Variant.Primary} className="secondaryButton" onClick={submit}>
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
