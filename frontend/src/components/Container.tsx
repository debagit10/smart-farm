import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  Stack,
  Icon,
} from "@mui/material";

import { CiUser } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineLiveHelp } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const [cookie, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();
  const drawerWidth = 277;

  const logOut = () => {
    removeCookie("email");
    removeCookie("id");
    removeCookie("farm");
    navigate("/login");
  };

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
            backgroundColor: "#E7E8E6",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className="flex justify-center p-12">
          <Typography
            variant="h4"
            noWrap
            component="div"
            className="font-black"
          >
            Smart Farm
          </Typography>
        </Toolbar>

        <div className="flex justify-center">
          <Stack spacing={1}>
            <Stack
              className="flex gap-2 hover:text-[#30D42B] cursor-pointer py-2 pr-10 pl-3 rounded-md"
              direction="row"
              sx={{
                color: "#8E8F8E",
                "&:hover": { color: "#30D42B", backgroundColor: "#DFE1DE" },
              }}
              onClick={() => navigate("/dashboard")}
            >
              <Icon sx={{ fontSize: "20px" }}>
                <TbReportAnalytics />
              </Icon>
              <Typography className="">Dashboard</Typography>
            </Stack>
            <Stack
              className="flex gap-2 hover:text-[#30D42B] cursor-pointer py-2 pr-10 pl-3 rounded-md"
              direction="row"
              sx={{
                color: "#8E8F8E",
                "&:hover": { color: "#30D42B", backgroundColor: "#DFE1DE" },
              }}
              onClick={() => {
                navigate("/management");
              }}
            >
              <Icon sx={{ fontSize: "20px" }}>
                <AiOutlineLineChart />
              </Icon>
              <Typography className="">Management</Typography>
            </Stack>
            <Stack
              className="flex gap-2 hover:text-[#30D42B] cursor-pointer py-2 pr-10 pl-3 rounded-md"
              direction="row"
              sx={{
                color: "#8E8F8E",
                "&:hover": { color: "#30D42B", backgroundColor: "#DFE1DE" },
              }}
              onClick={() => {
                navigate("/profile");
              }}
            >
              <Icon sx={{ fontSize: "20px" }}>
                <CiUser />
              </Icon>
              <Typography className="">Profile</Typography>
            </Stack>
            <Stack
              className="flex gap-2 hover:text-[#30D42B] cursor-pointer py-2 pr-10 pl-3 rounded-md"
              direction="row"
              sx={{
                color: "#8E8F8E",
                "&:hover": { color: "#30D42B", backgroundColor: "#DFE1DE" },
              }}
              onClick={() => {
                navigate("/support");
              }}
            >
              <Icon sx={{ fontSize: "20px" }}>
                <MdOutlineLiveHelp />
              </Icon>
              <Typography className="">Support</Typography>
            </Stack>
            <Stack
              className="flex gap-2 hover:text-[#30D42B] cursor-pointer py-2 pr-10 pl-3 rounded-md"
              direction="row"
              sx={{
                color: "#8E8F8E",
                "&:hover": { color: "#30D42B", backgroundColor: "#DFE1DE" },
              }}
              onClick={logOut}
            >
              <Icon sx={{ fontSize: "20px" }}>
                <TbLogout2 />
              </Icon>
              <Typography className="">Logout</Typography>
            </Stack>
          </Stack>
        </div>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "#DFE1DE" }}
        className="md:h-[100vh]"
      >
        <div>{children}</div>
      </Box>
    </Box>
  );
};

export default Container;
