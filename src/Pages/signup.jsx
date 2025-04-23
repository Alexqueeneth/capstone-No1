import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Divider,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to sign up: " + err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      setError("Failed to sign up with Google: " + err.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignup}
          sx={{ mb: 2 }}
        >
          Sign up with Google
        </Button>

        <Typography align="center">
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="text">Login</Button>
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
