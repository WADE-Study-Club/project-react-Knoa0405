import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import SignUpContainer from './SignUpContainer';

import LoginContainer from './LoginContainer';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={LoginContainer} />
        <Route path="/sign-up" component={SignUpContainer} />
      </Switch>
    </>
  );
}

export default App;
