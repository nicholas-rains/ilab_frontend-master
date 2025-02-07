import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppBarComponent from "./components/AppBar/AppBar";
import { SQLContext } from "./components/DBChat/DBChat";

import { ThemeContext } from "./context/ThemeContext";
import DBAssistantDD from "./views/AskDB/DBAssistantDD/DBAssistantDD";
import { SQLProvider } from "./context/SqlContext";

function App() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <SQLProvider>
      <ThemeProvider theme={currentTheme}>
        <Box style={{ display: "flex" }}>
          <CssBaseline />
          <AppBarComponent
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            currentTheme={currentTheme}
            toggleTheme={toggleTheme}
          />
          <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
            <Toolbar />

            <Routes>
              <Route path="/" element={<DBAssistantDD />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </SQLProvider>
  );
}

export default App;
