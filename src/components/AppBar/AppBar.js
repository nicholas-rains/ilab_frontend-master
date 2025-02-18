import React from "react";
import { AppBar, Toolbar, Typography, Box, FormControlLabel, Switch } from "@mui/material";
import AvatarMenu from "../AvatarMenu/AvatarMenu";
import PncLogo from "../../assets/logos/pnc-logo.png";
import { useTheme } from "@mui/material/styles";

function AppBarComponent({ open, handleDrawerOpen, currentTheme, toggleTheme }) {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.default, // White in light mode
        color: theme.palette.primary.main, // Blue text in light mode
        boxShadow: "none", // Optional: Remove shadow for cleaner look
      }}
    >
      <Toolbar>
        <Box display="flex" mr={2}>
          <img
            src={PncLogo}
            alt="PNC"
            style={{ width: 40, height: 40 }} // Logo remains unchanged
          />
        </Box>
        <Box
          sx={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            ml: "20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography 
              variant="h4" 
              noWrap 
              component="div" 
              sx={{ flexGrow: 1, color: theme.palette.text.primary }} // Blue text
            >
              AskDB - Data Discovery
            </Typography>
            <Typography 
              variant="h6" 
              noWrap 
              sx={{ flexGrow: 1, color: theme.palette.text.primary }} // Blue text
            >
              &nbsp; AI-powered tools for analyzing databases
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <FormControlLabel
            value="end"
            control={
              <Switch
                checked={currentTheme.palette.mode === "light"}
                onChange={toggleTheme}
                color="default"
              />
            }
            label="Dark"
            labelPlacement="end"
          /> */}
          <AvatarMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
