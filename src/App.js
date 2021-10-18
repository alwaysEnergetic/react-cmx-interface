import React from 'react';
import Provider from "react-redux/es/components/Provider";
import { store } from "./store";
import Home from "./apps/home";
import Login from "./apps/login";

import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";
import PrivateRoute from "./apps/login/privateRoute";
import PublicRoute from "./apps/login/publicRoute";

import './App.css';

const App = () => {
  return (
    <Provider store = {store} className="App">
      <Router>
          <Switch>
            <PublicRoute restricted={true} component={Login} path="/login" exact />
            <PublicRoute restricted={true} component={Login} path="/" exact />
            <PrivateRoute component={Home} path="/home" exact />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
