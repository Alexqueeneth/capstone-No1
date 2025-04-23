import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useTheme } from "../contexts/ThemeContext";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "64px",
            marginLeft: "240px",
            width: "calc(100% - 240px)",
            overFlow: "auto",
            position: "relative",
            zindex: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
