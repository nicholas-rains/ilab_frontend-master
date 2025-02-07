// themes.js
import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#414E58",
    },
    secondary: {
      main: "#F58025",
    },
    background: {
      default: "#484848",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  direction: "ltr",
});

export const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0069AA", // Blue for the header/AppBar
    },
    secondary: {
      main: "#F58025", // Orange for secondary elements if needed
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#1F2937",
    },
  },
  direction: "ltr",
});
