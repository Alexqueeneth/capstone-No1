import React from "react";
import { Box, Typography } from "@mui/material";
import SchedulePostForm from "../components/SchedulePostForm";

const Schedule = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Schedule Posts
      </Typography>
      <SchedulePostForm />
    </Box>
  );
};

export default Schedule;
