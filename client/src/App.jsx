import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import SignUpContainer from './SignUpContainer';

import LoginFormContainer from './LoginFormContainer';

import LogOut from './LogOut';

import MainPage from './MainPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/log-in" component={LoginFormContainer} />
        <Route path="/logout" component={LogOut} />
        <Route path="/main" component={MainPage} />
        <Route exact path="/" component={SignUpContainer} />
      </Switch>
    </>
  );
}

export default App;
