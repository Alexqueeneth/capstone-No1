import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { addHours } from "date-fns";

const SchedulePostForm = () => {
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("facebook");
  const [scheduleTime, setScheduleTime] = useState(addHours(new Date(), 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add Firebase integration here
    console.log({ content, platform, scheduleTime });
    alert("Post scheduled successfully!");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker />
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Schedule New Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Post Content"
                multiline
                rows={4}
                fullWidth
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Platform</InputLabel>
                <Select
                  value={platform}
                  label="Platform"
                  onChange={(e) => setPlatform(e.target.value)}
                  required
                >
                  <MenuItem value="facebook">Facebook</MenuItem>
                  <MenuItem value="twitter">Twitter</MenuItem>
                  <MenuItem value="instagram">Instagram</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                label="Schedule Time"
                value={scheduleTime}
                onChange={(newValue) => setScheduleTime(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
                minDateTime={addHours(new Date(), 1)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Schedule Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </LocalizationProvider>
  );
};

export default SchedulePostForm;
