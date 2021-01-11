import React from 'react';

import { Route, Redirect } from 'react-router-dom';

function AuthRoute({
  user, component, path,
}) {
  if (user.isAuth) {
    return (
      <Route path={path} component={component} />
    );
  }

  return (
    <Route
      render={(props) => (
        <Redirect
          to={{ pathname: '/sign-up', state: { from: props.location } }}
        />
      )}
    />
  );
}

export default AuthRoute;
