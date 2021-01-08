import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Form = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 85%;
  max-height: 60%;
`;

const Input = styled.input`
  font-size: 1rem;
  padding : 1rem;
  width: 80%;
  margin-bottom : 2rem;
  border : none;
  border-radius: 1.5rem;
  box-shadow: 1px 1px 25px 15px #e5e5e5 ;
`;

const AlertText = styled.p`
  color : #ff3000;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  border-radius: 1.5rem;
  padding : 0.5rem;
  background-color: #e5e5e5;
  font-size : 1.2rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
  }
`;

function SignUpForm({ inputs: { email, password }, onSubmit, onChange }) {
  return (
    <Form>
      <Input
        type="email"
        id="sign-up-email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
        required
      />
      <Input
        type="password"
        id="sign-up-password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onChange}
        required
      />
      <AlertText className="alert-text" />
      <Button onClick={onSubmit}>
        <Link
          to="/log-in"
          style={{
            textDecoration: 'none', color: '#FFF',
          }}
        >
          Log In
        </Link>
      </Button>
    </Form>
  );
}

export default SignUpForm;
