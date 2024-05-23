import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FiDroplet } from "react-icons/fi";
import { WiRain } from "react-icons/wi";
import { PiSunHorizon } from "react-icons/pi";
import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL } from "../../Env";

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

const Forecast = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [temp, setTemp] = useState<string>();
  const [cookie, setCookies, removeCookie] = useCookies();

  // Create an array of weekday names
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Create an array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the current date
  const currentDate = new Date();

  // Format the date
  const formattedDate = `${weekdays[currentDate.getDay()]}, ${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  // Output the formatted date

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
        //console.log(response.data.list[0]);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentWeather();

    if (weatherData) {
      const celsiusTemp = (weatherData?.main.temp - 273.15).toFixed(2);
      setTemp(celsiusTemp);
    }
  });

  return (
    weatherData && (
      <div className="bg-[#E7E8E6] rounded-[16px]">
        <Stack spacing={0.5} className="p-5">
          <Stack spacing={0.5}>
            <Stack spacing={1} direction="row">
              <Typography variant="h3">{temp}°C</Typography>
            </Stack>
            <Typography className="text-[#696A68]" variant="caption">
              Temperature
            </Typography>
            <Typography className="text-[#696A68]" variant="subtitle2">
              {formattedDate}
            </Typography>
          </Stack>

          <Stack spacing={2} direction="row">
            <Stack spacing={1} direction="row">
              <div
                style={{ color: "#30D42B" }}
                className="p-3 bg-[#EFF0EE]  text-3xl rounded-xl"
              >
                <FiDroplet />
              </div>
              <Stack>
                <Typography
                  className="text-[#696A68]"
                  variant="subtitle1"
                  sx={{ fontSize: ".75rem" }}
                >
                  Humidity
                </Typography>
                <Typography>{weatherData.main.humidity}%</Typography>
              </Stack>
            </Stack>
            <Stack spacing={1} direction="row">
              <div
                style={{ color: "#30D42B" }}
                className="p-3 bg-[#EFF0EE]  text-3xl rounded-xl"
              >
                <WiRain />
              </div>

              <Stack>
                <Typography
                  className="text-[#696A68]"
                  variant="subtitle1"
                  sx={{ fontSize: ".75rem" }}
                >
                  Clouds
                </Typography>
                <Typography>{weatherData.clouds.all}%</Typography>
              </Stack>
            </Stack>
            <Stack spacing={1} direction="row">
              <div
                style={{ color: "#30D42B" }}
                className="p-3 bg-[#EFF0EE]  text-3xl rounded-xl"
              >
                <PiSunHorizon />
              </div>

              <Stack>
                <Typography
                  className="text-[#696A68]"
                  variant="subtitle1"
                  sx={{ fontSize: ".75rem" }}
                >
                  Wind speed
                </Typography>
                <Typography>{weatherData.wind.speed}m/s</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    )
  );
};

export default Forecast;
