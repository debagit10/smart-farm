import React from "react";
import Container from "../components/Container";
import { Stack } from "@mui/material";
import Forecast from "../components/dashboard/Forecast";
import Rainfall from "../components/dashboard/Rainfall";
import Insights from "../components/dashboard/Insights";
//import Moisture from "../components/dashboard/Moisture";

const Dashboard = () => {
  return (
    <Container>
      <div className="px-10  flex">
        <div style={{ flexGrow: 1 }}>
          <Stack spacing={2}>
            <Stack spacing={2} direction="row">
              <div>
                <Forecast />
              </div>
              <div></div>
            </Stack>

            <div>
              <Rainfall />
            </div>
          </Stack>
        </div>

        <div>
          <Insights />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
