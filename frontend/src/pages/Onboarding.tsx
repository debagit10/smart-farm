import React, { useState } from "react";
import { MobileStepper, Button, styled, Chip } from "@mui/material";

import FarmDetails from "../components/onboarding/Farm_details";
import Checkout from "../components/onboarding/Checkout";
import Appointment from "../components/onboarding/Appointment";
import Validate from "../components/onboarding/Validate";

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  const steps = [
    {
      desription: <FarmDetails />,
      button: "Schedule Appointment",
    },
    {
      desription: <Appointment />,
      button: "Make payment",
    },
    {
      desription: <Checkout />,
    },
    {
      desription: <Validate />,
      button: "Get started",
    },
  ];

  const maxSteps = steps.length;

  return (
    <div className="bg-white flex justify-center">
      <div className="m-5 w-[46rem] h-[46rem] bg-[#DFE1DE] rounded-[4rem]">
        {/* <div className="flex justify-start ml-10 mt-10">
          <Typography variant="body2">Onboarding...</Typography>
        </div> */}

        <div className="   w-[100%] ">
          <div className="flex flex-col justify-center">
            <div className="mt-10">{steps[activeStep].desription}</div>

            {activeStep != 2 ? (
              <div className="flex flex-col">
                <div className="flex justify-center my-5">
                  <CustomButton
                    onClick={handleNext}
                    variant="contained"
                    disableElevation
                    className="md:w-80 w-60"
                  >
                    {steps[activeStep].button}
                  </CustomButton>
                </div>
              </div>
            ) : (
              <div className="flex justify-center mt-5">
                <Chip
                  onClick={handleNext}
                  label="I've sent the money"
                  size="small"
                  style={{
                    padding: "1rem",
                    backgroundColor: "transparent",
                    border: "1px #A6A9A5 solid",
                  }}
                  className="hover:cursor-pointer"
                />
              </div>
            )}

            <div className="flex justify-center">
              <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                backButton={undefined}
                nextButton={undefined}
                sx={{
                  maxWidth: 400,
                  //flexGrow: 1,
                  backgroundColor: "transparent",
                  ".MuiMobileStepper-dot": {
                    width: 20,
                    height: 20,
                    margin: 1,

                    borderRadius: "50%",
                  },
                  ".MuiMobileStepper-dotActive": {
                    backgroundColor: "#30D42B",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
