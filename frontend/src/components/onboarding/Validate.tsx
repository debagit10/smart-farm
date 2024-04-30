import React from "react";
import { Typography } from "@mui/material";
import { GiCheckMark } from "react-icons/gi";

const Validate = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Typography variant="h4">Validate</Typography>
      </div>
      <div className="flex justify-center">
        <Typography variant="body2">Validate your payment</Typography>
      </div>

      <div className="flex justify-center items-center mt-20 mb-32">
        <div className="w-52 h-52 rounded-full flex items-center justify-center bg-[#E8F4E8] ">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#30D42B]">
            <GiCheckMark style={{ color: "white", fontSize: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validate;
