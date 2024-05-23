import { Stack, Typography } from "@mui/material";
import React from "react";
import { GoSun } from "react-icons/go";
import { MdOutlineWater } from "react-icons/md";
import { FiDroplet } from "react-icons/fi";

interface IrrigationProps {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const calculateEvapotranspiration = ({
  temperature,
  humidity,
  windSpeed,
}: IrrigationProps): number => {
  // Simplified Hargreaves equation
  const a = 0.0023;
  const b = 17.8;

  // Simplified Hargreaves equation
  let eto = a * (temperature + b) * Math.sqrt(temperature);

  // Adjust for humidity
  eto = eto * (1 - humidity / 100);

  // Adjust for wind speed (simplified)
  const windAdjustment = windSpeed * 0.1; // Simplified adjustment factor
  const adjustedEto = eto + windAdjustment;

  return adjustedEto;
};

const Irrigation: React.FC<IrrigationProps> = ({
  temperature,
  humidity,
  windSpeed,
}) => {
  const etParams = { temperature, humidity, windSpeed };
  const evapotranspirationRate = calculateEvapotranspiration(etParams);
  console.log(temperature, humidity, windSpeed);

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
              Moisture level
            </Typography>
            <Typography variant="subtitle1">{etParams.humidity}%</Typography>
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
            <Typography variant="subtitle1">
              {evapotranspirationRate.toFixed(2)} mm/day
            </Typography>
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
