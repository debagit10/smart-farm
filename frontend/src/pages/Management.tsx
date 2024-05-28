import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Irrigation from "../components/insight/Irrigation";
import UV_exposure from "../components/insight/UV_exposure";
import Harvest_timing from "../components/insight/Harvest_timing";
import Disease_and_Pest from "../components/insight/Disease_and_Pest";
import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL, WEATHER_STACK_API } from "../Env";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
}

const Management = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [uvIndex, setUvIndex] = useState();

  const [cookie, setCookies, removeCookie] = useCookies();

  const latitude = cookie.lat;
  const longitude = cookie.lon;

  const config = { headers: { "Content-type": "application/json" } };

  const getCurrentWeather = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/weather-data?lat=${latitude}&lon=${longitude}`,
        { headers: config.headers }
      );

      if (response.data.list) {
        setWeatherData(response.data.list[0]);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUV_Index = async () => {
    try {
      const weatherstackApiUrl = `http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API}&query=${latitude},${longitude}`;

      const uvResponse = await axios.get(weatherstackApiUrl);
      console.log(uvResponse.data.current);
      setUvIndex(uvResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentWeather();
    getUV_Index();
  });

  return (
    <Container>
      {weatherData && uvIndex && (
        <div className="flex flex-col md:flex-row gap-5">
          <div className="m-5">
            <Irrigation
              humidity={weatherData.main.humidity}
              temperature={weatherData.main.temp - 273.15}
              windSpeed={weatherData.wind.speed}
            />
          </div>
          <div className="m-5">
            <UV_exposure cloud={weatherData.clouds.all} uvi={uvIndex} />
          </div>
          <div className="m-5">
            <Harvest_timing
              moisture={weatherData.main.humidity}
              windSpeed={weatherData.wind.speed}
              cloud={weatherData.clouds.all}
            />
          </div>
          <div className="m-5">
            <Disease_and_Pest
              humidity={weatherData.main.humidity}
              windSpeed={weatherData.wind.speed}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Management;
