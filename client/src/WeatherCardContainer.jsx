import React from 'react';

import styled, { keyframes } from 'styled-components';

import WeatherComponent from './WeatherComponent';

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

const WeatherCard = styled.section`
  display : ${(props) => (props.cityName === '' ? 'none' : 'grid')};
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  justify-items: center;
  padding: 2rem;
  margin: 2rem;
  width: 19rem;
  height: 30rem;
  background-color: white;
  border-radius: 1.75rem;
  animation: ${slideUp} 1s ease-in-out, ${fadeIn} 1.25s ease-in-out 0ms 1;
`;

const CityName = styled.span`
  font-size : 2rem;
  margin-top : 1rem;
  margin-bottom :1rem;
`;

const CityTemp = styled.span`
  font-size: 5rem;
  margin-top : 1rem;
  text-align: center;
`;

const CityWeather = styled.span`
  font-size : 1.5rem;
`;

function WeatherCardContainer({ currentCityName = '', currentCityWeather = '', currentTemp = '' }) {
  return (
    <WeatherCard cityName={currentCityName}>
      <WeatherComponent weather={currentCityWeather} />
      <CityTemp>
        {Math.floor((currentTemp - 273.15))}
        °
      </CityTemp>
      <CityName>{currentCityName}</CityName>
      <CityWeather>{currentCityWeather}</CityWeather>
    </WeatherCard>
  );
}

export default WeatherCardContainer;
