import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// Mock engagement data
const engagementData = [
  { date: "Jan 1", likes: 4000, comments: 2400, shares: 2400 },
  { date: "Jan 2", likes: 3000, comments: 1398, shares: 2210 },
  { date: "Jan 3", likes: 2000, comments: 9800, shares: 2290 },
  { date: "Jan 4", likes: 2780, comments: 3908, shares: 2000 },
  { date: "Jan 5", likes: 1890, comments: 4800, shares: 2181 },
  { date: "Jan 6", likes: 2390, comments: 3800, shares: 2500 },
  { date: "Jan 7", likes: 3490, comments: 4300, shares: 2100 },
];

const EngagementChart = () => {
  const [timeRange, setTimeRange] = useState("week");

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6">Engagement Trends</Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Time Range</InputLabel>
          <Select
            value={timeRange}
            label="Time Range"
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <MenuItem value="week">Last 7 Days</MenuItem>
            <MenuItem value="month">Last 30 Days</MenuItem>
            <MenuItem value="all">All Time</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={engagementData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="likes"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
          <Line type="monotone" dataKey="shares" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default EngagementChart;
