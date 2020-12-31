import React from 'react';

import styled from 'styled-components';

function LoginContainer() {
  return (
    <>
      <section className="form-container">
        <h1 className="title">Login</h1>
        <div>
          <input type="email" id="login-email" name="email" placeholder="Email" required />
          <input type="password" id="login-password" name="password" placeholder="Password" required />
          <button type="button" className="login-button">
            Log In
          </button>
        </div>
      </section>
    </>
  );
}

export default LoginContainer;
