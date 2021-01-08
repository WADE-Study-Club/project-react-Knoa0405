import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import axios from 'axios';

import MountainImage from './images/mountain.jpg';

import LoginForm from './LoginForm';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FormContainer = styled.section`
  display: flex;
  width: 50vw;
  height: 80vh;
  min-width: 70%;
  min-height: 60%;
  border-radius: 1rem;
  background : #fff;
`;

const Main = styled.main`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 40%;
  @media(max-width: 1024px) {
    width: 100%;
  }
`;

const MainTitle = styled.h1`
  margin-top : 5%;
  font-size: 50px;
`;

const Aside = styled.aside`
  display : flex;
  width: 100%;
  height: 80vh;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  animation: 2s ease-in-out ${FadeIn};
  background: url(${MountainImage}) center/cover;
  @media(max-width: 1024px) {
    display : none;
  }
`;

function postLogin(inputs) {
  axios.post('/api/users/register', inputs)
    .then((response) => console.log(response));
}

function LoginFormContainer() {
  const inputs = {
    email: '',
    password: '',
  };

  const [inputValues, setValues] = useState(inputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    postLogin(inputs);
  };

  return (
    <>
      <FormContainer>
        <Main>
          <MainTitle>Log In</MainTitle>
          <LoginForm
            inputs={inputValues}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Main>
        <Aside />
      </FormContainer>
    </>
  );
}

export default LoginFormContainer;
