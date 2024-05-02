import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Stack } from "@mui/material";
import Forecast from "../components/dashboard/Forecast";
import Rainfall from "../components/dashboard/Rainfall";
import Insights from "../components/dashboard/Insights";
import axios from "axios";
//import Moisture from "../components/dashboard/Moisture";

const Dashboard = () => {
  const [latitude, setLatitude] = useState<any>();
  const [longitude, setLongitude] = useState<any>();
  const [error, setError] = useState("");

  const getLocation = () => {
    if ("geolocation" in navigator) {
      // Get the user's current position
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();

    getWeather();
  }, []); // Empty dependency array to run only once

  return (
    <Container>
      <div className="px-10  flex">
        <div style={{ flexGrow: 1 }}>
          <Stack spacing={2}>
            <Stack spacing={2} direction="row">
              <div>
                <Forecast />
              </div>
              <div></div>
            </Stack>

            <div>
              <Rainfall />
            </div>
          </Stack>
        </div>

        <div>
          <Insights />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
