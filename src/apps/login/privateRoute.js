import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectIsLogin  } from "../../store/loginSlice";

const PrivateRoute = ({component: Component, ...rest}) => {
    let isLogin = useSelector(selectIsLogin);
    console.log(isLogin); 
    return (
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;