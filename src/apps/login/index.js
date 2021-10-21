import React, { useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@workday/canvas-kit-react-button";
import { FiArrowRightCircle } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import { doLogin, setLoginStatus } from "../../store/loginSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
}).required();

const background = window.location.origin + "/static/cmx/default/assets/images/reactSystemUi/background.d598f5c7.jpg";
const logo = window.location.origin + "/static/cmx/default/assets/images/reactSystemUi/logo.b642dff7.png";

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        error: false,
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submit = () => {
        reset();
        const result =dispatch(
            doLogin({
                email: state.email,
                password: state.password,
            })
        );
        result.then(res => {
            if (res.meta.requestStatus === 'rejected') {
                setState((prevState) => ({"email": prevState.email, "password": prevState.password, "error": true }));        
            }
        });
    };

    const handleEmail = (e) => {
        setState((prevState) => ({"email": e.target.value, "password": prevState.password, "error": false }));
    }

    const handlePassword = (e) => {
        setState((prevState) => ({"email": prevState.email, "password": e.target.value, "error": false }));
    }

    return (
        <div
            className="loginPage canvas"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="loginContent canvasBackground">
                <div className="loginDesc">
                    <div>
                        <img src={logo} alt="logo" className="imgSrc" />
                    </div>
                    <div className="letter">
                        Expert Partner in your growth
                    </div>
                </div>
                <div className="loginFo">
                    <div className="loginForm">
                        <div className="signIn">Sign in</div>
                        <div className="loginInfoMessage">
                            Please Enter Your Information
                        </div>
                        <form onSubmit={handleSubmit(submit)}>
                            <br />
                            <input
                                className="form-control input-lg rounded-md inputUserName inputVal "
                                {...register("email")}
                                placeholder="Email"
                                type="email"
                                required
                                onChange={(e) => handleEmail(e)}
                            />
                            <p className="errorMsg">{errors.email?.message}</p>
                            <br />

                            <input
                                className="form-control input-lg rounded-md inputPassword inputVal"
                                {...register("password")}
                                placeholder="Password"
                                type="password"
                                required
                                onChange={(e) => handlePassword(e)}
                            />
                            <p className="errorMsg">
                                { errors.password ? errors.password.message : state.error ? "Invalid password, please try again" : null }
                            </p>
                            <br />
                            <div className="loginButton">
                                <div className="w-full">
                                    <Button
                                        variant={Button.Variant.Primary}
                                        className="secondaryButton"
                                        type="submit"
                                    >
                                        <div className="flex">
                                            Login
                                            <FiArrowRightCircle className="key" />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;

const useStyles = makeStyles((theme) => ({}));
