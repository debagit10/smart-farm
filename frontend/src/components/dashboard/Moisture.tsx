import React, { useState, useEffect } from "react";
import { Icon, Stack, Typography } from "@mui/material";
import axios from "axios";

const Moisture = () => {
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
      <Stack spacing={2} className="p-5">
        <Stack spacing={1}>
          <Stack spacing={1} direction="row">
            <Typography>12%</Typography>
            <Icon>Sun</Icon>
          </Stack>
          <Typography>Today's date</Typography>
          <Typography>Average soil moisture</Typography>

          <Stack spacing={2}>
            <Stack spacing={1} direction="row">
              <Typography>Low</Typography>
              <Typography>Progress bar</Typography>
              <Typography>Field name</Typography>
            </Stack>
            <Stack spacing={1} direction="row">
              <Typography>Low</Typography>
              <Typography>Progress bar</Typography>
              <Typography>Field name</Typography>
            </Stack>
            <Stack spacing={1} direction="row">
              <Typography>Low</Typography>
              <Typography>Progress bar</Typography>
              <Typography>Field name</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Moisture;
