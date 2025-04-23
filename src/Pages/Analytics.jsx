import React from "react";
import { Box, Typography } from "@mui/material";
import EngagementChart from "../components/EngagementChart";

const Analytics = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Advanced Analytics
      </Typography>
      <EngagementChart />
    </Box>
  );
};

export default Analytics;
