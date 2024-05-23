import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { API_URL } from "../../Env";
import { LoadingButton } from "@mui/lab";

const AddFarm = () => {
  const [cookie, setCookies, removeCookie] = useCookies();
  const [farmAddress, setFarmAddress] = useState("");
  const [farmField, setFarmField] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const userId = cookie.id;
  const config = { headers: { "Content-type": "application/json" } };

  const data = {
    farmAddress,
    farmField,
    userId,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const CustomButton = styled(Button)({
    backgroundColor: "#30D42B",
    borderColor: "#30D42B",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#1F9D21",
      color: "white",
    },
  });

  const add = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/api/farm-detail`,
        data,
        config
      );
      if (response) {
        setOpen(false);
        setLoading(false);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="m-3">
        <CustomButton
          onClick={handleOpen}
          //className="text-[#30D42B]"
          sx={{ paddingX: "20px" }}
        >
          Add Farm
        </CustomButton>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Farm/Field</DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-3 mt-5 ">
            <TextField
              variant="filled"
              label="Field Name"
              type="text"
              size="small"
              className="bg-[#F5F6F5]"
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
              onChange={(e) => setFarmField(e.target.value)}
            />
            <TextField
              variant="filled"
              label="Field Address "
              type="text"
              size="small"
              className="bg-[#F5F6F5]"
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
              onChange={(e) => setFarmAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col mt-8">
            {loading ? (
              <div className="flex justify-center">
                <LoadingButton
                  loading
                  loadingIndicator="Please wait…"
                  variant="outlined"
                  fullWidth
                  sx={{ textTransform: "capitalize" }}
                >
                  Fetch data
                </LoadingButton>
              </div>
            ) : (
              <CustomButton variant="contained" disableElevation onClick={add}>
                Add
              </CustomButton>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddFarm;
