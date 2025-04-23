import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import App from "./App";
import { AuthProvider } from "./contexts/authContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

// Import firebase to ensure initialization
import "./firebaseConfig/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
