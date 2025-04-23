import React from "react";
import { Box, Typography } from "@mui/material";

const Settings = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography>Account settings and preferences</Typography>
    </Box>
  );
};

export default Settings;
