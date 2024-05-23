import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Stack, Typography } from "@mui/material";
import { WiRain } from "react-icons/wi";
import axios from "axios";
import { API_URL } from "../../Env";
import { useCookies } from "react-cookie";

const Rainfall = () => {
  const [cookie, setCookies, removeCookie] = useCookies();

  const latitude = cookie.lat;
  const longitude = cookie.lon;

  const [graph, setGraph] = useState<any>();
  const graphData: any = [];

  const xAxis: any = [];
  const yAxis: any = [];

  const config = { headers: { "Content-type": "application/json" } };

  const getWeatherForecast = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/weather-data?lat=${latitude}&lon=${longitude}`,
        { headers: config.headers }
      );

      setGraph(response.data.list);

      for (let i = 0; i < 6; i++) {
        graphData.push(graph[i]);
        const timestamp = graphData[i].dt;

        const date = new Date(timestamp * 1000);

        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        // Format the time as hh:mm:ss
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        xAxis.push(formattedTime);

        yAxis.push(graphData[i].main.temp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherForecast();
  });

  const getCurrentTime = () => {
    const now = new Date();
    return now;
  };

  const generateData = () => {
    const currentTime = getCurrentTime();
    const data = [];
    for (let i = 0; i <= 5; i++) {
      const time = new Date(currentTime);
      time.setHours(time.getHours() + i * 3);
      data.push({ time, value: Math.random() * 10 });
    }
    return data;
  };

  const formatTime = (time: any) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const data = generateData();
  const yTicks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div className="bg-[#E7E8E6] rounded-[16px] mr-20">
      <div className="">
        <Stack spacing={0.2} className="px-5 pt-1">
          <Stack spacing={1} direction="row">
            <Typography variant="h5">24 C</Typography>
            <div className="p-1 bg-[#DFE1DE]  text-2xl rounded-full">
              <WiRain />
            </div>
          </Stack>
          <Typography className="text-[#696A68]" variant="subtitle2">
            Tuesday, April 23, 2024
          </Typography>
        </Stack>

        <div className="px-5">
          <Typography
            className="text-[#30D42B] bg-[#DFE1DE] p-1"
            variant="caption"
          >
            Rainfall
          </Typography>
        </div>
      </div>

      <div style={{ width: "80%", height: 400 }}>
        <LineChart width={700} height={400} data={data}>
          <CartesianGrid strokeDasharray="" />{" "}
          <XAxis
            dataKey="time"
            type="category"
            tickFormatter={formatTime}
            tick={{
              stroke: "rgba(0,0,0,0.54)",
              fontSize: 12,
            }}
          />
          <YAxis domain={[10, 100]} ticks={yTicks} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#30D42B"
            name="Rainfall"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Rainfall;
