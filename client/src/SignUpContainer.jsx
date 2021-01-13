import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';

import axios from 'axios';

import MountainImage from './images/mountain.jpg';

import SignUpForm from './SignUpForm';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Form = styled.section`
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

function SignUpContainer() {
  const inputs = {
    email: '',
    password: '',
  };

  const [validEmail, setValidEmail] = useState('');

  const [inputValues, setValues] = useState(inputs);

  const regexText = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;

  function checkEmail({ email }) {
    axios.post('/api/users/register/dupliEmailCheck', { email })
      .then((response) => {
        setValidEmail(response?.data?.message);
      });
  }

  function postSignUp({ inputs: input }) {
    axios.post('/api/users/register', input);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    const values = {
      [name]: value,
    };

    setValues({
      ...inputValues,
      [name]: value,
    });

    if (regexText.test(values.email)) {
      checkEmail({ email: values.email });
    }
  };

  const handleSubmit = () => {
    if (validEmail.indexOf('사용') !== -1) {
      postSignUp({ inputs: inputValues });
    }
  };

  return (
    <>
      <Form>
        <Main>
          <MainTitle>sign-up</MainTitle>
          <SignUpForm
            inputs={inputValues}
            onChange={handleChange}
            onSubmit={handleSubmit}
            validEmail={validEmail}
          />
          {validEmail}
        </Main>
        <Aside />
      </Form>
    </>
  );
}

export default SignUpContainer;
