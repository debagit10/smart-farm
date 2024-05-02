import { Stack, Typography } from "@mui/material";
import React from "react";
import { FiDroplet } from "react-icons/fi";
import { WiRain } from "react-icons/wi";
import { PiSunHorizon } from "react-icons/pi";
import { GoSun } from "react-icons/go";

const Forecast = () => {
  return (
    <div className="bg-[#E7E8E6] rounded-[16px]">
      <Stack spacing={2} className="p-5">
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
