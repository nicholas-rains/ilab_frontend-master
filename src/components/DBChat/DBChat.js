import React, { useState } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useSQL } from "../../context/SqlContext";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

const backendURL = window.ASKDB_API_URL;

const DBChat = (props) => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const { showSQL, setShowSQL } = useSQL();
  const theme = useTheme();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    if (!inputText.trim()) return; // Do nothing if input is empty.

    // Capture the original user query.
    const submittedQuery = inputText;
    setLoading(true);

    try {
      const response = await axios.post(
        `${backendURL}/chat`,
        { query: inputText },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;
      // Extract the SQL query from the response.
      const sqlQuery = data.query || "No SQL query generated.";
      // Extract rows from the backend response (assuming they are under data.response.Query_1).
      const rows = data.response?.Query_1 || [];

      // Pass the data to the parent via the tableSet callback.
      // We pass the original submittedQuery so that DataDisplay shows exactly what the user asked.
      if (props.tableSet) {
        props.tableSet({ rows, query: sqlQuery, userQuery: submittedQuery });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setInputText(""); // Clear the text field.
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <TextField
        label="Ask me something..."
        variant="outlined"
        value={inputText}
        onChange={handleInputChange}
        sx={{
          width: { xs: "100%", sm: "900px" },
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.mode === "light" ? "#fff" : undefined,
            "& fieldset": {
              borderColor: theme.palette.mode === "light" ? "#000" : undefined,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.mode === "light" ? "#000" : undefined,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
          input: {
            color: theme.palette.mode === "light" ? "#000" : undefined,
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light"
                ? "#d96b1f"
                : theme.palette.primary.dark,
          },
        }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Submit"}
      </Button>
      <FormControlLabel
        control={
          <Switch
            checked={showSQL}
            onChange={() => setShowSQL(!showSQL)}
            color="secondary"
          />
        }
        label="Show SQL"
      />
    </div>
  );
};

export default DBChat;
