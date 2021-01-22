import React, { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import Axios from 'axios';

import AddCardSvg from './svg/AddCardSvg';

import WeatherCardContainer from './WeatherCardContainer';

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

const MainPageContainer = styled.section`
  display : grid;
  grid-template-columns: repeat(3, 1fr);
`;

function MainPage({ history }) {
  const [userCities, setUserCities] = useState([]);

  function handleClick() {
    history.push('/add');
  }

  useEffect(() => {
    Axios.get('/api/userCities').then((response) => {
      setUserCities(Object.values(response?.data?.cities));
    });
  }, []);

  return (
    <MainPageContainer>
      {userCities.map(({ name, temp, weather }) => (
        <WeatherCardContainer
          currentCityName={name}
          currentTemp={temp}
          currentCityWeather={weather}
        />
      ))}
      <AddCard onClick={handleClick}>
        <p>ADD CITY</p>
        <AddCardSvg />
      </AddCard>
    </MainPageContainer>
  );
}

export default MainPage;
