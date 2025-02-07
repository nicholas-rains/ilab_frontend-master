import React from "react";
import { useTheme } from "@mui/material";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSQL } from "../../context/SqlContext";

// Dummy data for the table rows
const dummyData = [
  {
    id: 1,
    customer_id: "C001",
    order_id: "O1001",
    order_date: "2025-01-01",
    total_amount: 100.5,
    status: "Completed",
  },
  {
    id: 2,
    customer_id: "C002",
    order_id: "O1002",
    order_date: "2025-01-02",
    total_amount: 250.75,
    status: "Pending",
  },
  {
    id: 3,
    customer_id: "C003",
    order_id: "O1003",
    order_date: "2025-01-03",
    total_amount: 175.0,
    status: "Shipped",
  },
  // You can add more dummy rows if needed.
];

// Dummy column definitions for the DataGrid
const dummyColumns = [
  { field: "order_id", headerName: "Order ID", width: 150 },
  { field: "customer_id", headerName: "Customer ID", width: 150 },
  { field: "order_date", headerName: "Order Date", width: 200 },
  { field: "total_amount", headerName: "Total Amount", width: 150, type: "number" },
  { field: "status", headerName: "Status", width: 150 },
];

// Dummy text for the user query and SQL query
const dummyUserQuery =
  "Show me all orders from the past month sorted by order date in descending order.";

const dummySQLQuery = `SELECT order_id,
       customer_id,
       order_date,
       total_amount,
       status
FROM orders
WHERE order_date >= DATEADD(month, -1, GETDATE())
ORDER BY order_date DESC;`;

const DataDisplay = () => {
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
        Dummy Data Display
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
          {dummyUserQuery || "No user query yet."}
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
                {dummySQLQuery && dummySQLQuery.length > 0
                  ? `-- SQL Query:\n${dummySQLQuery}`
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
        {dummyData && dummyData.length > 0 ? (
          <DataGrid
            rows={dummyData}
            columns={dummyColumns}
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
