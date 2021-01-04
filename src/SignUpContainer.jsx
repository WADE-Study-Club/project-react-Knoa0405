import React from 'react';

import styled, { keyframes } from 'styled-components';

import MountainImage from './images/mountain.jpg';

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

const SignUpMain = styled.main`
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

const SignUpForm = styled.div`
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
  return (
    <>
      <FormContainer>
        <SignUpMain>
          <MainTitle>sign-up</MainTitle>
          <SignUpForm>
            <Input type="email" id="sign-up-email" name="email" placeholder="Email" required />
            <Input type="password" id="sign-up-password" name="password" placeholder="Password" required />
            <AlertText className="alert-text" />
            <Button>
              Sign Up
            </Button>
          </SignUpForm>
        </SignUpMain>
        <Aside />
      </FormContainer>
    </>
  );
}

export default SignUpContainer;
