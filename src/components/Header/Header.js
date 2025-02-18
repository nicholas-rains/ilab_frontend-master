import React from "react";
import { AppBar, Container } from "@mui/material";
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
