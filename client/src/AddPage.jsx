import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import styled from 'styled-components';

import WeatherComponent from './WeatherComponent';

const AddWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display : flex;
  position : relative;
  width : 80%;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem;
  border-radius: 3rem;
  outline: none;
  border: none;
  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
  font-size: 1rem;
  color: #131F69;
  text-transform: uppercase;
`;

const SearchButton = styled.button`
  cursor: pointer;
  position: absolute;
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
  const [cityName, setCityName] = useState('');

  const [input, setInput] = useState('');

  const [weather, setWeather] = useState('');

  const [temp, setTemp] = useState(273.5);

  function getCityWeather({ city }) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab438ddf499d854dccd639afe28f0919`;

    Axios.get(url).then((response) => {
      setTemp(response?.data?.main?.temp);
      setCityName(response?.data?.name);
      setWeather(response?.data?.weather[0]?.main);
    });
  }

  function handleChange(e) {
    const { value } = e.target;

    setInput(value);
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
          <SearchInput onChange={handleChange} value={input} />
          <SearchButton onClick={handleClick}>확인</SearchButton>
        </SearchWrapper>
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
