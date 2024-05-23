import { Stack, Typography } from "@mui/material";
import React from "react";
import { MdOutlineWater } from "react-icons/md";
import { PiWind } from "react-icons/pi";
import { WiCloudy } from "react-icons/wi";

interface HarvestProps {
  moisture: number;
  windSpeed: number;
  cloud: number;
}

const Harvest_timing: React.FC<HarvestProps> = ({
  moisture,
  windSpeed,
  cloud,
}) => {
  return (
    <div className="bg-[#E7E8E6] rounded-[16px] w-[274px]">
      <Stack spacing={2} className="p-5">
        <Stack spacing={0.5}>
          <div className="">
            <Typography variant="h4">Harvest timing</Typography>
          </div>

          <div className="mt-8">
            <Typography className="text-[#696A68] " variant="caption">
              Metrics:
            </Typography>
          </div>
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
            <Typography variant="subtitle1">{moisture}%</Typography>
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

        <div className="flex gap-2">
          <div
            style={{ color: "#30D42B" }}
            className="p-3 bg-[#EFF0EE]  text-3xl rounded-xl"
          >
            <WiCloudy />
          </div>
          <div>
            <Typography variant="caption" className="text-[#696A68]">
              Cloud cover
            </Typography>
            <Typography variant="subtitle1">{cloud}%</Typography>
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

export default Harvest_timing;
