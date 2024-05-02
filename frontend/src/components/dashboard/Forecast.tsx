import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FiDroplet } from "react-icons/fi";
import { WiRain } from "react-icons/wi";
import { PiSunHorizon } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import axios from "axios";

const Forecast = () => {
  const [latitude, setLatitude] = useState<any>();
  const [longitude, setLongitude] = useState<any>();
  const [error, setError] = useState("");
  const [weather, setWeather] = useState("");

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError("");
        },

        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://smart-farm-ubl9.onrender.com/api/weather-data?lat=${latitude}&lon=${longitude}`
      );
      console.log(response.data.list);
      setWeather(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();

    getWeather();
  }, []); // Empty dependency array to run only once
  return (
    <div className="bg-[#E7E8E6] rounded-[16px]">
      <Stack spacing={0.5} className="p-5">
        <Stack spacing={0.5}>
          <Stack spacing={1} direction="row">
            <Typography variant="h3">24 C</Typography>
            <div className="p-3 bg-[#DFE1DE]  text-3xl rounded-full">
              <GoSun />
            </div>
          </Stack>
          <Typography className="text-[#696A68]" variant="subtitle2">
            Tuesday, April 23, 2024
          </Typography>
          <Typography className="text-[#696A68]" variant="caption">
            Temperature
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
              <Typography>35%</Typography>
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
                Rainfall
              </Typography>
              <Typography>22%</Typography>
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
                UV index
              </Typography>
              <Typography>1000</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Forecast;
