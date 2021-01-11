import React, { useState, useEffect } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Axios from 'axios';

import SignUpContainer from './SignUpContainer';

import LoginFormContainer from './LoginFormContainer';

import LogOut from './LogOut';

import MainPage from './MainPage';

import AuthRoute from './AuthRoute';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    Axios.get('/api/users/auth').then((response) => {
      setUser(response?.data);
    });
  }, []);

  return (
    <>
      <Switch>
        <Route path="/sign-up" component={SignUpContainer} />
        <Route path="/logout" component={LogOut} />
        <AuthRoute user={user} path="/main" component={MainPage} />
        <AuthRoute user={user} path="/" component={LoginFormContainer} />
      </Switch>
    </>
  );
}

export default App;
