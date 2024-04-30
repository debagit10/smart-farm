import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import {
  LocalizationProvider,
  DateCalendar,
  DigitalClock,
} from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Appointment = () => {
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);

  // const handleDateChange = (date: any) => {
  //   setSelectedDate(date);
  // };

  // const handleTimeChange = (time: any) => {
  //   setSelectedTime(time);
  // };

  // const handleDateTimeSubmit = () => {
  //   console.log("Selected Date:", selectedDate);
  //   console.log("Selected Time:", selectedTime);
  // };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Typography variant="h4">Schedule Appointment</Typography>
      </div>
      <div className="flex justify-center">
        <Typography variant="body2">
          Schedule date and time for sensor installation
        </Typography>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex mx-16 my-5">
          <div className="w-96">
            <DateCalendar />
          </div>
          <div className="w-96">
            <DigitalClock />
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default Appointment;
