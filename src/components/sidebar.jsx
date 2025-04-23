import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  BarChart as AnalyticsIcon,
  Schedule as ScheduleIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Sidebar = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme.palette.background.default);
  }, [theme]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "15%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "15%",
          boxSizing: "border-box",
          position: "fixed",
          top: "64px",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <List
        style={{
          backgroundColor: theme.palette.background.default,
          height: "100%",
        }}
      >
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemIcon>
            <AnalyticsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} to="/schedule">
          <ListItemIcon>
            <ScheduleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Schedule Posts" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
