import React, { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { ThemeContext } from "../contexts/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Tooltip title={darkMode ? "Light mode" : "Dark mode"}>
      <IconButton onClick={toggleDarkMode} color="inherit">
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
