import { Stack, Typography } from "@mui/material";
import React from "react";
import { MdOutlineWater } from "react-icons/md";
import { MdOutlineControlCamera } from "react-icons/md";
import { PiWind } from "react-icons/pi";

interface DiseaseProps {
  humidity: number;
  windSpeed: number;
}

const Disease_and_Pest: React.FC<DiseaseProps> = ({ humidity, windSpeed }) => {
  return (
    <div className="bg-[#E7E8E6] rounded-[16px] w-[274px] ">
      <Stack spacing={2} className="p-5">
        <Stack spacing={0.5}>
          <div className="flex gap-10">
            <Typography variant="h4">Pest control</Typography>
            <div className="p-3   text-3xl rounded-full">
              <MdOutlineControlCamera />
            </div>
          </div>

          <Typography className="text-[#696A68]" variant="caption">
            Metrics:
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
              Humidity
            </Typography>
            <Typography variant="subtitle1">{humidity}%</Typography>
          </div>
        </div>

        <div className="flex gap-2">
          <div
            style={{ color: "#30D42B" }}
            className="p-3 bg-[#EFF0EE]  text-3xl rounded-xl"
          >
            <PiWind />
          </div>
          <div>
            <Typography variant="caption" className="text-[#696A68]">
              WindSpeed
            </Typography>
            <Typography variant="subtitle1">{windSpeed}m/s</Typography>
          </div>
        </div>

        <div>
          <Typography variant="caption" className="text-[#696A68]">
            Insight
          </Typography>
          <Typography variant="subtitle2" style={{ lineHeight: "25px" }}>
            Ensure adequate watering to maintain soil moisture and reduce plant
            stress. Implement IPM strategies, including biological controls and
            targeted pesticide use, if needed. Stay vigilant, and adjust your
            practices to keep your crops healthy.
          </Typography>
        </div>
      </Stack>
    </div>
  );
};

export default Disease_and_Pest;
