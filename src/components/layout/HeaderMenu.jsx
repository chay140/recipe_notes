import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useWeather } from '../../api/weather';
import LoadingSpinner from '../common/LoadingSpinner';
import { useUserStore } from '../../zustand/userStore';
import ProfileMenu from './ProfileMenu';
import Button from '../common/Button';


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
      {(!error && isLoading) ? (
        <LoadingSpinner />
      ) : (
        <StWeather>
          <StWeatherIcon src={iconUrl} />
          <StWeatherContent>
            <p>{weatherData?.main?.temp}°C</p>
            <p>{weatherData.weather[0].description}</p>
          </StWeatherContent>
        </StWeather>
      )}
      {!isAuthenticated ? (
        <Button onClick={moveToLogin}>로그인</Button>
      ) : (
        <ProfileMenu />
      )}
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
  /* background-color: var(--color-primary); */
  border-radius: var(--default-radius);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    width: 50px;
    aspect-ratio: 1/1;
    margin: 0;
    filter: drop-shadow(0 0 0.25rem var(--color-gray2));
  }
`;

const StWeatherIcon = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: 150%;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin: 0;
  filter: drop-shadow(0 0 0.25rem var(--color-gray2));
`;

const StWeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  line-height: 1.5;
  p {
    font-size: 12px;
    margin-top: 2px;
  }
`;

const StButton = styled.button`
  background-color: var(--color-third);
  color: var(--color-gray7);

  padding: 15px 10px 10px;
  border-radius: var(--default-radius);
`;
