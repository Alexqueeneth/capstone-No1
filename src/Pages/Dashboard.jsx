import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import EngagementChart from "../components/EngagementChart";
import RecentPosts from "../components/RecentPost";

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EngagementChart />
        </Grid>
        <Grid item xs={12}>
          <RecentPosts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
