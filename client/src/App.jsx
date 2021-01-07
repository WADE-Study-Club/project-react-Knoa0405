import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import SignUpContainer from './SignUpContainer';

import LoginFormContainer from './LoginFormContainer';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={LoginFormContainer} />
        <Route path="/sign-up" component={SignUpContainer} />
      </Switch>
    </>
  );
}

export default App;
