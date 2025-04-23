import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      platform: "Facebook",
      content: "Our latest product launch",
      engagement: "1.2K",
      date: "2023-05-01",
    },
    {
      id: 2,
      platform: "Twitter",
      content: "Join our webinar tomorrow",
      engagement: "845",
      date: "2023-05-02",
    },
    {
      id: 3,
      platform: "Instagram",
      content: "Behind the scenes",
      engagement: "2.3K",
      date: "2023-05-03",
    },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Posts
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Platform</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Engagement</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.platform}</TableCell>
                <TableCell>{post.content}</TableCell>
                <TableCell>{post.engagement}</TableCell>
                <TableCell>{post.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentPosts;
