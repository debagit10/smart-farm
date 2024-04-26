import React from "react";
import { Typography, TextField, Button, styled } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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

  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-center">
      <div className="m-5 w-[46rem] h-[46rem] bg-[#DFE1DE] rounded-[4rem] text-center">
        <div className="flex justify-center ">
          <div className="w-[21rem] h-[41rem]">
            <Typography variant="h3" className="pt-[5rem]">
              Sign Up
            </Typography>
            <Typography variant="body2">
              Create an account to get started
            </Typography>

            <div className="flex flex-col gap-3 mt-7">
              <TextField
                variant="filled"
                label="First name"
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
              />
              <TextField
                variant="filled"
                label="Last name"
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
              />
              <TextField
                variant="filled"
                label="Farm name"
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
              />
              <TextField
                variant="filled"
                label="Email"
                type="email"
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
              />
              <TextField
                variant="filled"
                label="Password"
                type="password"
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
              />
            </div>

            <div className="flex flex-col mt-11">
              <CustomButton variant="contained" disableElevation>
                Sign Up
              </CustomButton>
            </div>

            <div className="flex items-center mt-3.5">
              <hr className="flex-1 border-t border-[#747574]" />
              <span className="px-2">or</span>
              <hr className="flex-1 border-t border-[#747574]" />
            </div>

            <div className="flex flex-col mt-3.5">
              <CustomButton
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#CFD2CD",
                  color: "#30D42B",
                  "&:hover": {
                    backgroundColor: "#B6B9B6",
                    color: "#1F9D21",
                  },
                }}
                startIcon={<FcGoogle />}
              >
                <Typography className="text-lg">
                  Continue with Google
                </Typography>
              </CustomButton>
            </div>

            <div>
              <Typography variant="body1" className="pt-2 text-[#747574]">
                Have an account?{" "}
                <span
                  className="text-[#30D42B] hover:cursor-pointer hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
