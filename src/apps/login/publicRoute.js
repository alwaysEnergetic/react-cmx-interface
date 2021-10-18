import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectIsLogin  } from "../../store/loginSlice";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const isLogin = useSelector(selectIsLogin);
    console.log(isLogin);    
    return (
        <Route {...rest} render={props => (
            isLogin && restricted ?
                <Redirect to="/home" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;