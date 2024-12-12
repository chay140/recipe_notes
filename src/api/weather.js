import { useQuery } from '@tanstack/react-query';

const WEATHER_API = import.meta.env.VITE_WEATHER_KEY;

const fetchWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${WEATHER_API}&units=metric&lang=kr`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return res.json();
};

export const useWeather = () => {
  return useQuery({
    queryKey: ['weather'],
		queryFn: fetchWeather,
		staleTime: 1000 * 60 * 10, // 10 분
  });
};
