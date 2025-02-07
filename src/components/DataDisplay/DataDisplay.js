import React from "react";
import { useTheme } from "@mui/material";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSQL } from "../../context/SqlContext";

/**
 * @param {Array} data - rows for the data grid
 * @param {Array} columns - columns for the data grid
 * @param {string} title - title for the entire section
 * @param {string} query - the final SQL query
 * @param {string} userQuery - the user's original query
 */
const DataDisplay = ({ data, columns, title, query, userQuery }) => {
  const theme = useTheme();
  const { showSQL } = useSQL();

  return (
    <Paper
      sx={{
        width: "100%",
        margin: "2rem 0",
        padding: "20px",
        minHeight: "80vh",
        border: "1px solid #ccc",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {/* User Query Section */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        User Query:
      </Typography>
      <Box
        sx={{
          padding: "1rem",
          backgroundColor: theme.palette.background.default,
          borderRadius: "8px",
          mb: 2,
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          {userQuery || "No user query yet."}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* SQL Query Section (Toggle-Controlled) */}
      {showSQL && (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Generated SQL:
          </Typography>
          <Box
            sx={{
              padding: "1rem",
              backgroundColor: theme.palette.background.default,
              borderRadius: "8px",
              mb: 2,
              width: "100%",
              overflowX: "auto", // Enable horizontal scrolling
              minWidth: 0,
            }}
          >
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre", // Preserve formatting without wrapping
                width: "max-content", // Let the <pre> element be as wide as its content
              }}
            >
              <code>
                {query && query.length > 0
                  ? `-- SQL Query:\n${query}`
                  : "No SQL generated. Please ask a question to generate SQL."}
              </code>
            </pre>
          </Box>

          <Divider sx={{ my: 2 }} />
        </>
      )}

      {/* Data Grid Section */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Data Results:
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {data && data.length > 0 ? (
          <DataGrid
            rows={data}
            columns={columns}
            getRowId={(row) => row.customer_id || row.account_id || row.id}
            autoHeight
            disableSelectionOnClick
            pageSize={5}
            rowsPerPageOptions={[5, 10, 25]}
          />
        ) : (
          <Typography variant="body2">No data yet...</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default DataDisplay;
