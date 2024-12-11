import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useWeather } from '../../api/weather';
import LoadingSpinner from '../common/LoadingSpinner';
import Button from '../common/Button';
import { useUserStore } from '../../zustand/userStore';
import ProfileMenu from './ProfileMenu';

const HeaderMenu = () => {
  const { isAuthenticated } = useUserStore();

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
      {!isAuthenticated ? <Button buttonHandler={moveToLogin} label="로그인" /> : <ProfileMenu />}
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
  background-color: var(--color-primary);
  border-radius: var(--default-radius);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin: 0;
    filter: drop-shadow(0 0 0.25rem var(--color-gray2));
  }

  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
