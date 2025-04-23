import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./contexts/authContext";
import { ThemeProvider as CustomThemeProvider } from "./contexts/ThemeContext";
import PrivateRoute from "./components/PrivateRoutes";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import Schedule from "./Pages/schedule";

function App() {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/schedule" element={<Schedule />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CustomThemeProvider>
  );
}

export default App;
