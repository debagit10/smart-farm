import { Stack, Typography } from "@mui/material";
import React from "react";
import { GoSun } from "react-icons/go";
import { PiSunHorizon } from "react-icons/pi";
import { WiCloudy } from "react-icons/wi";

interface UVExposureProps {
  cloud: number;
}

const UV_exposure: React.FC<UVExposureProps> = ({ cloud }) => {
  return (
    <div className="bg-[#E7E8E6] rounded-[16px] w-[274px] ">
      <Stack spacing={2} className="p-5">
        <Stack spacing={0.5}>
          <div className="flex gap-10">
            <Typography variant="h4">UV risks</Typography>
            <div className="p-3  text-3xl rounded-full">
              <PiSunHorizon />
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
            <GoSun />
          </div>
          <div>
            <Typography variant="caption" className="text-[#696A68]">
              UV Index
            </Typography>
            <Typography variant="subtitle1">07</Typography>
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
            UV index is high at 7. Protect crops and limit sun exposure for
            workers. Use shade nets for sensitive plants, and ensure workers
            wear hats, sunglasses, and sunscreen. Stay hydrated and avoid peak
            sun hours (10 a.m. to 4 p.m.). Take precautions to avoid UV damage.
            Stay safe!
          </Typography>
        </div>
      </Stack>
    </div>
  );
};

export default UV_exposure;
