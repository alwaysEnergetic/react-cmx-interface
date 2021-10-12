import React from 'react';
import Provider from "react-redux/es/components/Provider";
import { store } from "./app/store";
import Home from "./features/home";
import Login from "./features/login";

import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";

import './App.css';

const App = () => {
  return (
    <Provider store = {store} className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/home" component={ Home } />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
