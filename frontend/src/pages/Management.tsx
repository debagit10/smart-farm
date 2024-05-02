import React from "react";
import Container from "../components/Container";
import Irrigation from "../components/insight/Irrigation";
import UV_exposure from "../components/insight/UV_exposure";
import Harvest_timing from "../components/insight/Harvest_timing";
import Disease_and_Pest from "../components/insight/Disease_and_Pest";

const Management = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="m-5">
          <Irrigation />
        </div>
        <div className="m-5">
          <UV_exposure />
        </div>
        <div className="m-5">
          <Harvest_timing />
        </div>
        <div className="m-5">
          <Disease_and_Pest />
        </div>
      </div>
    </Container>
  );
};

export default Management;
