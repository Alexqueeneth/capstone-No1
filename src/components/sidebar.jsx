import React from "react";
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

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          position: "fixed",
          top: "64px",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} to="/schedule">
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary="Schedule Posts" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
