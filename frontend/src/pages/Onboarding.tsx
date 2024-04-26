import React, { useState } from "react";
import { MobileStepper, Button, styled, Typography } from "@mui/material";

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
      button: "Next",
    },
    {
      desription: <Validate />,
      button: "Get started",
    },
  ];

  const maxSteps = steps.length;

  return (
    <div className="bg-white flex justify-center">
      <div className="m-5 w-[46rem] h-[46rem] bg-[#DFE1DE] rounded-[4rem] text-center">
        <div className="flex justify-start ml-10 mt-10">
          <Typography variant="body2">Onboarding...</Typography>
        </div>

        <div className="flex justify-center ">
          <div className="flex flex-col">
            <div>{steps[activeStep].desription}</div>

            <div>
              <div className="mb-5">
                <CustomButton
                  onClick={handleNext}
                  variant="contained"
                  disableElevation
                >
                  {steps[activeStep].button}
                </CustomButton>
              </div>

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
                    flexGrow: 1,
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
    </div>
  );
};

export default Onboarding;
