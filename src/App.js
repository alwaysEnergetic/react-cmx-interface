import React from 'react';
import Provider from "react-redux/es/components/Provider";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from "./store";
import Home from "./apps/home";
import Login from "./apps/login";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./apps/login/privateRoute";
import PublicRoute from "./apps/login/publicRoute";

import './App.css';

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store = {store} className="App">
      <PersistGate loading={null} persistor={persistor}>
        <Router basename="/cmxSystemUiLogin">
            <Switch>
              <PublicRoute restricted={true} component={Login} path="/login" exact />
              <PublicRoute restricted={true} component={Login} path="/" exact />
              <PrivateRoute component={Home} path="/home" exact />
            </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
