import React from "react";
// import { MobileStepper, Button, styled, Chip } from "@mui/material";
// import { IoMdArrowRoundBack } from "react-icons/io";

import FarmDetails from "../components/onboarding/Farm_details";
// import Checkout from "../components/onboarding/Checkout";
// import Appointment from "../components/onboarding/Appointment";
// import Validate from "../components/onboarding/Validate";

const Onboarding = () => {
  // const [activeStep, setActiveStep] = useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  // const handleBack = () => {
  //   setActiveStep((currActiveStep) => currActiveStep - 1);
  // };

  // const CustomButton = styled(Button)({
  //   backgroundColor: "#30D42B",
  //   borderColor: "#30D42B",
  //   color: "white",
  //   textTransform: "capitalize",
  //   "&:hover": {
  //     backgroundColor: "#1F9D21",
  //     color: "white",
  //   },
  // });

  // const steps = [
  //   {
  //     desription: <FarmDetails />,
  //     button: "Schedule Appointment",
  //   },
  //   {
  //     desription: <Appointment />,
  //     button: "Make payment",
  //   },
  //   {
  //     desription: <Checkout />,
  //   },
  //   {
  //     desription: <Validate />,
  //     button: "Get started",
  //   },
  // ];

  //const maxSteps = steps.length;

  return (
    <div className="bg-white flex justify-center">
      <div className="m-5 w-[46rem] h-[46rem] bg-[#DFE1DE] rounded-[4rem]">
        {/* {activeStep != 0 && (
          <div className="flex justify-start ml-10 mt-5">
            <Button
              onClick={handleBack}
              className="text-[#30D42B]"
              style={{ color: "#30D42B" }}
            >
              <IoMdArrowRoundBack style={{ fontSize: "1.5rem" }} />
            </Button>
          </div>
        )} */}

        <div className="w-[100%] ">
          <div className="flex flex-col justify-center">
            {/* <div className="mt-5">{steps[activeStep].desription}</div> */}
            <div className="mt-5">
              <FarmDetails />
            </div>

            {/* {activeStep != 0 && (
              <div className="flex flex-col">
                <div className="flex justify-center ">
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
            )} */}

            {/* <div className="flex flex-col">
              <div className="flex justify-center ">
                <CustomButton
                  onClick={handleNext}
                  variant="contained"
                  disableElevation
                  className="md:w-80 w-60"
                >
                  {steps[activeStep].button}
                </CustomButton>
              </div>
            </div> */}

            {/* <div className="flex justify-center">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
