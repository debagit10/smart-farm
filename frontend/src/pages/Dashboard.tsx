import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Container from "../components/Container";
import { Button, Stack } from "@mui/material";
import Forecast from "../components/dashboard/Forecast";
import Rainfall from "../components/dashboard/Rainfall";
import Insights from "../components/dashboard/Insights";
import axios from "axios";
import { API_URL } from "../Env";
import { API_KEY } from "../Env";
import AddFarm from "../components/dashboard/AddFarm";
import FieldList from "../components/dashboard/FieldList";
import Typography from "@mui/material/Typography/Typography";
//import Moisture from "../components/dashboard/Moisture";

const Dashboard = () => {
  const [cookie, setCookies, removeCookie] = useCookies();
  const [latitude, setLatitude] = useState<any>();
  const [longitude, setLongitude] = useState<any>();
  const [weather, setWeather] = useState();

  const address = "Bariga, Lagos";

  const handleGeocode = async () => {
    const apiKey = "663d4146bfd0d665803991qai48a38d";
    const url = `https://geocode.maps.co/search?q=${address}&api_key=${apiKey}`;

    try {
      const response = await axios.get(url);

      if (response.data[0].display_name) {
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);

        setCookies("lat", latitude);
        setCookies("lon", longitude);
      } else {
        console.log("Address not found");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const getCurrentWeather = async () => {
    if (longitude && latitude) {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleGeocode();
    getCurrentWeather();
  });

  return (
    <Container>
      <div className="flex justify-end">
        <div className="mt-4">
          <Typography className="text-[#424242]" variant="caption">
            Select field/farm:
          </Typography>
        </div>

        <FieldList />
        <AddFarm />
      </div>
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
