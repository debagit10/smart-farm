import React from "react";
import { Typography, TextField, Chip, Stack } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import AddIcon from "@mui/icons-material/Add";

const FarmDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Typography variant="h4">Farm Details</Typography>
      </div>
      <div className="flex justify-center">
        <Typography variant="body2">Set up your farm and fields</Typography>
      </div>

      <div className="flex flex-col mx-16 my-5">
        <Typography className="mb-5 font-black">Farm 1</Typography>
        <TextField
          type="text"
          variant="filled"
          size="small"
          label="Farm address"
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            sx: {
              "&.Mui-focused": {
                color: "#30D42B",
              },
            },
          }}
        />
      </div>

      <div className="flex flex-col mx-16 my-5">
        <div className="flex justify-end">
          <Chip
            label="Add field"
            size="small"
            style={{
              color: "white",
              backgroundColor: "#30D42B",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
            className="text-white"
            icon={<AddIcon style={{ color: "white" }} />}
          />
        </div>

        <Typography>Fields</Typography>

        <TextField
          type="text"
          variant="filled"
          size="small"
          label="Field name"
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            sx: {
              "&.Mui-focused": {
                color: "#30D42B",
              },
            },
          }}
        />
        <Stack direction="row" spacing={1} className="mt-2">
          <Chip
            label="Pet feeders"
            size="small"
            style={{ color: "white", backgroundColor: "#A9ABA7" }}
          />
          <Chip
            label="Sprinklers"
            size="small"
            style={{ color: "white", backgroundColor: "#A9ABA7" }}
          />
          <Chip
            label="Drain and refill"
            size="small"
            style={{ color: "white", backgroundColor: "#A9ABA7" }}
          />
        </Stack>
      </div>

      <div className="flex flex-col mx-16 mt-5 mb-10">
        <TextField
          type="text"
          variant="filled"
          size="small"
          defaultValue="Tomato"
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            sx: {
              "&.Mui-focused": {
                color: "#30D42B",
              },
            },
          }}
        />
        <Stack direction="row" spacing={1} className="mt-2">
          <Chip
            label="Pet feeders"
            size="small"
            style={{ color: "white", backgroundColor: "#A9ABA7" }}
          />
          <Chip
            label="Sprinklers"
            size="small"
            style={{ color: "white", backgroundColor: "#A9ABA7" }}
          />
          <Chip
            label="Drain and refill"
            size="small"
            style={{ color: "white", backgroundColor: "#A9ABA7" }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default FarmDetails;
