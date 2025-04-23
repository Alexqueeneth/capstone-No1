import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: "64px" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Social Dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <DarkModeToggle />
          {currentUser && (
            <>
              <Avatar
                src={currentUser.photoURL}
                alt={currentUser.displayName}
              />
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
