import React from "react";
import { Icon, Stack, Typography } from "@mui/material";

const Moisture = () => {
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
