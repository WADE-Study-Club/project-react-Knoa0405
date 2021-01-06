import React from 'react';

import styled, { keyframes } from 'styled-components';

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

function LoginContainer() {
  return (
    <>
      <FormContainer>
        <Main>
          <MainTitle>Log In</MainTitle>
          <LoginForm />
        </Main>
        <Aside />
      </FormContainer>
    </>
  );
}

export default LoginContainer;
