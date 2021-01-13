import React from 'react';

import styled, { keyframes } from 'styled-components';

import AddCardSvg from './svg/AddCardSvg';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform:  translate(0px,100px);
  }
  to {
    transform:  translate(0px,0px);
  }
`;

const AddCard = styled.a`
  background-color: #ffffff;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 2rem;
  margin: 2rem;
  width: 19rem;
  height: 30rem;
  justify-items: center;
  cursor: pointer;
  border-radius: 1.75rem;
  animation: ${slideUp} 1s ease-in-out, ${fadeIn} 1.5s ease-in-out 0ms 1;
  color: #443282;
`;

function MainPage({ history }) {
  function handleClick() {
    history.push('/add');
  }

  return (
    <AddCard onClick={handleClick}>
      <p>ADD CITY</p>
      <AddCardSvg />
    </AddCard>
  );
}

export default MainPage;
