import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DBChat from "../DBChat/DBChat.js";
const Header = ({ tableSet }) => {
    return (
      <AppBar position="relative">
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <DBChat tableSet={tableSet} />
        </Container>
      </AppBar>
    );
  };
  
  export default Header;
  