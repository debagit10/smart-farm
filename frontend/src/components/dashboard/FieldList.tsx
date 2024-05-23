import { Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";

const FieldList = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="mr-3 mt-3 mb-3">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ color: "black" }}
        >
          {selectedOption}
        </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem value="" onClick={() => setSelectedOption("Option 1")}>
          Option 1
        </MenuItem>
        <MenuItem
          value="Option 1"
          onClick={() => setSelectedOption("Option 2")}
        >
          Option 2
        </MenuItem>
        <MenuItem
          value="Option 2"
          onClick={() => setSelectedOption("Option 3")}
        >
          Option 3
        </MenuItem>
        <MenuItem
          value="Option 3"
          onClick={() => setSelectedOption("Option 4")}
        >
          Option 4
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FieldList;
