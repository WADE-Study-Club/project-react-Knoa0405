import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { saveItem, loadItem } from './service/storage';

function AuthRoute({
  user, component, path,
}) {
  const loadUser = loadItem('user');

  if (user.isAuth && loadUser) {
    return (
      <Route path={path} component={component} />
    );
  }

  if (!user.isAuth) {
    saveItem({ key: 'user', value: { isAuth: true } });
    return (
      <Route path={path} component={component} />
    );
  }

  if (loadUser.isAuth) {
    return (
      <Route
        render={(props) => (
          <Redirect
            to={{ pathname: '/main', state: { from: props.location } }}
          />
        )}
      />
    );
  }

  return null;
}

export default AuthRoute;
