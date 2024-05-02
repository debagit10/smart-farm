import { Stack, Typography } from "@mui/material";
import React from "react";

const Insights = () => {
  return (
    <div className="bg-[#E7E8E6] rounded-[16px] w-[251px] h-[764px] p-3 ">
      <Typography className="p-3 text-[#30D42B]">Notifications</Typography>

      <Stack spacing={1}>
        <div className="bg-[#DFE1DE] rounded-[16px] p-3 text-[#696A68] ">
          <Typography variant="subtitle2">Tomato</Typography>
          <Typography variant="caption">Predicted Rainfall</Typography>
          <Typography variant="subtitle2">
            Best time to plant new seeds might be between{" "}
            <span className="text-[#30D42B]">April 24 - 26.</span>
          </Typography>
          <Typography variant="subtitle2">13:05 . April 23, 2024</Typography>
        </div>
        <div className="bg-[#DFE1DE] rounded-[16px] p-3 text-[#696A68] ">
          <Typography variant="subtitle2">Tomato</Typography>
          <Typography variant="caption">Predicted Rainfall</Typography>
          <Typography variant="subtitle2">
            Best time to plant new seeds might be between{" "}
            <span className="text-[#30D42B]">April 24 - 26.</span>
          </Typography>
          <Typography variant="subtitle2">13:05 . April 23, 2024</Typography>
        </div>
        <div className="bg-[#DFE1DE] rounded-[16px] p-3 text-[#696A68] ">
          <Typography variant="subtitle2">Tomato</Typography>
          <Typography variant="caption">Predicted Rainfall</Typography>
          <Typography variant="subtitle2">
            Best time to plant new seeds might be between{" "}
            <span className="text-[#30D42B]">April 24 - 26.</span>
          </Typography>
          <Typography variant="subtitle2">13:05 . April 23, 2024</Typography>
        </div>
        <div className="bg-[#DFE1DE] rounded-[16px] p-3 text-[#696A68] ">
          <Typography variant="subtitle2">Tomato</Typography>
          <Typography variant="caption">Predicted Rainfall</Typography>
          <Typography variant="subtitle2">
            Best time to plant new seeds might be between{" "}
            <span className="text-[#30D42B]">April 24 - 26.</span>
          </Typography>
          <Typography variant="subtitle2">13:05 . April 23, 2024</Typography>
        </div>
      </Stack>
    </div>
  );
};

export default Insights;
