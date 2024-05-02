import { Stack, Typography } from "@mui/material";
import React from "react";
import { GoSun } from "react-icons/go";
import { MdOutlineWater } from "react-icons/md";
import { FiDroplet } from "react-icons/fi";

const Irrigation = () => {
  return (
    <div className="bg-[#E7E8E6] rounded-[16px] w-[274px]">
      <Stack spacing={2} className="p-5">
        <Stack spacing={0.5}>
          <div className="flex gap-10">
            <Typography variant="h4">Irrigation</Typography>
            <div className="p-3   text-3xl rounded-full">
              <FiDroplet />
            </div>
          </div>
          <Stack spacing={1} direction="row">
            <Typography variant="h5">24 C</Typography>
            <div className="p-1 bg-[#DFE1DE]  text-xl rounded-full">
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

        <div className="flex gap-2">
          <div
            style={{ color: "#30D42B" }}
            className="p-3 bg-[#EFF0EE]  text-3xl rounded-xl"
          >
            <MdOutlineWater />
          </div>
          <div>
            <Typography variant="caption" className="text-[#696A68]">
              Moisture level
            </Typography>
            <Typography variant="subtitle1">35%</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div
            style={{ color: "#30D42B" }}
            className="p-3 bg-[#EFF0EE]  text-3xl rounded-xl"
          >
            <GoSun />
          </div>
          <div>
            <Typography variant="caption" className="text-[#696A68]">
              Evapotranspiration Rates
            </Typography>
            <Typography variant="subtitle1">6mm/day</Typography>
          </div>
        </div>

        <div>
          <Typography variant="caption" className="text-[#696A68]">
            Insight
          </Typography>
          <Typography variant="subtitle2" style={{ lineHeight: "25px" }}>
            Your soil conditions are optimal, but remember to monitor soil
            moisture regularly. Do not irrigate for the rest of the day. Stay
            tuned to forecasts and adjust accordingly. Keep your crops thriving!
          </Typography>
        </div>
      </Stack>
    </div>
  );
};

export default Irrigation;
