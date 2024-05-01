import React, { ReactNode } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  //IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Smart Farm
          </Typography>
        </Toolbar>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <div>{children}</div>
      </Box>
    </Box>
  );
};

export default Container;
