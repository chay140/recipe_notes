import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useWeather } from '../../api/weather';
import LoadingSpinner from '../common/LoadingSpinner';

const HeaderMenu = () => {
  const navigate = useNavigate();
  const { data: weatherData, isLoading, error } = useWeather();
  let iconUrl = '';

  const moveToLogin = () => {
    navigate('/login');
  };

  // weather icon
  if (weatherData) {
    const iconCode = weatherData['weather'][0]['icon'];
    iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  return (
    <StMenu>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <StWeather>
          <img src={iconUrl} />
          <p>{weatherData?.main?.temp}°C</p>
        </StWeather>
      )}
      <button onClick={moveToLogin}>로그인</button>
    </StMenu>
  );
};

export default HeaderMenu;

const StMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StWeather = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin: 0;
  }

  p {
    font-size: 12px;
  }
`;
