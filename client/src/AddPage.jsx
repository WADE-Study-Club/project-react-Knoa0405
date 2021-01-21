import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import styled, { keyframes, css } from 'styled-components';

import WeatherComponent from './WeatherComponent';

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const AddWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction : column;
  flex: 1 1;
  justify-content: space-between;
  align-items : center;
  padding-top : 2rem;
`;

const WeatherCard = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  justify-items: center;
  padding: 2rem;
  margin: 2rem;
  width: 19rem;
  height: 30rem;
  cursor: pointer;
  background-color: white;
  border-radius: 1.75rem;
  animation: slideup 1s ease-in-out, fadein 1.25s ease-in-out 0ms 1;
`;

const SearchWrapper = styled.div`
  display : flex;
  justify-content : center;
  width: 80%;
`;

const SearchInput = styled.input`
  padding: 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  font-size: 1rem;
  color: #131F69;
  text-transform: uppercase;
`;

const SearchContainer = styled.div`
  position : relative;
  display : flex;
  flex-direction : column;
  width : 100%;
  height : 30%;
`;

const SearchCities = styled.ul`
  background-color : #fff;
  top : 3.5rem;
  width: 100%;
  border-radius : 15px;
  box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 255, 0.1);
  opacity : ${(props) => props.opacity};
  padding: 0;
  margin : 0;
  ${(props) => props.opacity === 0
    && css`
  animation : ${fadeOut} 0.5s;
  `}
`;

const SearchCity = styled.button`
  display: flex;
  width: 100%;
  text-decoration: none;
  border: none;
  cursor : pointer;
  list-style : none;
  padding-left : 1rem;
  padding-top : 1rem;
  padding-bottom : 1rem;
  border-bottom : 1px solid #e5e5e5;
  background-color : #fff;
  &:hover {
    background-color : rgba(0, 0, 255, 0.1);
  }
  &:first-child {
    border-top-left-radius : 15px;
    border-top-right-radius : 15px;
  }
  &:last-child {
    border-bottom-left-radius : 15px;
    border-bottom-right-radius : 15px;
    border-bottom: none;
  }
`;

const SearchButton = styled.button`
  position : absolute;
  cursor: pointer;
  background-color: #31feae;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  right: 0;
  top: -0.35rem;
  outline: none;
  border: none;
  z-index: 5;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  color : #fff;
`;

const MainCard = styled.div`
  height: 87vh;
  width: 90vw;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  margin-top: -4rem;
`;

const CityWrapper = styled.div`
  flex: 1 1;
  position: relative;
  border-radius: 0 1rem 1rem 0;
  background-color : rgba(43,36,77,.5);
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 100%;
`;

const CityHeader = styled.div`
  position: relative;
  color: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-sizing: border-box;
`;

const CityTitle = styled.h1`

`;

const CityDate = styled.span`
`;

const CityBody = styled.div`
  position: relative;
  color: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-sizing: border-box;
`;

const CityInfo = styled.span`
  display: flex;
  flex-flow: column;
  text-align: center;
  margin-top: -2rem;
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

function AddPage() {
  const [input, setInput] = useState('');

  const [temp, setTemp] = useState(273.5);
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState('');

  const [isToggleOn, setToggleOn] = useState(false);

  const [opacity, setOpacity] = useState(1);

  const [currentTemp, setCurrentTemp] = useState(273.5);
  const [currentCityName, setCurrentCityName] = useState('');
  const [currentCityWeather, setCurrentCityWeather] = useState('');

  const cities = [
    { id: 1, name: 'Dubai' },
    { id: 2, name: 'Seoul' },
    { id: 3, name: 'Japan' },
  ];

  function getCityWeather({ currentCity, city }) {
    if (city) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}`;

      Axios.get(url).then((response) => {
        setTemp(response?.data?.main?.temp);
        setCityName(response?.data?.name);
        setWeather(response?.data?.weather[0]?.main);
      });
    }
    if (currentCity) {
      const currentUrl = `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${process.env.REACT_APP_WEATHER_API}`;

      Axios.get(currentUrl).then((response) => {
        setCurrentTemp(response?.data?.main?.temp);
        setCurrentCityName(response?.data?.name);
        setCurrentCityWeather(response?.data?.weather[0]?.main);
      });
    }
  }

  function handleChange(e) {
    const { value } = e.target;

    setInput(value);
  }

  function handleSelectCity(name = '') {
    setInput(name);

    getCityWeather({ currentCity: name });
  }

  function handleBlur() {
    setOpacity(0);

    setTimeout(() => setToggleOn(false), 500);
  }

  function handleFocus() {
    setToggleOn(true);

    setOpacity(1);
  }

  function handleClick() {
    const city = input;

    getCityWeather({ city });
  }

  useEffect(() => {
    const city = 'seoul';

    getCityWeather({ city });
  }, []);

  return (
    <MainCard>
      <AddWrapper>
        <SearchWrapper>
          <SearchContainer>
            <SearchInput
              onChange={handleChange}
              value={input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="SERACH CITY"
            />
            {isToggleOn && (
              <SearchCities
                opacity={opacity}
              >
                {cities.map(({ id, name }) => (
                  <SearchCity
                    key={id}
                    onClick={() => handleSelectCity(name)}
                  >
                    {name}
                  </SearchCity>
                ))}
              </SearchCities>
            )}
            <SearchButton onClick={handleClick}>확인</SearchButton>
          </SearchContainer>
        </SearchWrapper>
        <WeatherCard>
          <WeatherComponent weather={currentCityWeather} />
          <CityTemp>
            {Math.floor((currentTemp - 273.15))}
            °
          </CityTemp>
          <CityName>{currentCityName}</CityName>
          <CityWeather>{currentCityWeather}</CityWeather>
        </WeatherCard>
      </AddWrapper>
      <CityWrapper>
        <CityHeader>
          <CityTitle>CITY OF THE MONTH</CityTitle>
          <CityDate>Sunday, 31th July</CityDate>
        </CityHeader>
        <CityBody>
          <CityInfo>
            <WeatherComponent weather={weather} />
            <CityTemp>
              {Math.floor((temp - 273.15))}
              °
            </CityTemp>
            <CityName>{cityName}</CityName>
            <CityWeather>{weather}</CityWeather>
          </CityInfo>
        </CityBody>
      </CityWrapper>
    </MainCard>
  );
}

export default AddPage;
