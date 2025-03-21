import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { Box, Paper, Typography, Divider, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSQL } from '../../context/SqlContext';
import { format } from 'sql-formatter';

const DataDisplay = ({ data, columns, title, query, userQuery }) => {
  const theme = useTheme();
  const { showSQL } = useSQL();

  // State to control whether the SQL query display is cleared
  const [cleared, setCleared] = useState(false);

  // Clear the SQL display whenever a new user query is submitted
  useEffect(() => {
    setCleared(true);
  }, [userQuery]);

  // When a new SQL query comes in, display it (if non-empty)
  useEffect(() => {
    if (query && query.length > 0) {
      setCleared(false);
    }
  }, [query]);

  // Format the SQL query if it exists using the named export 'format'
  const formattedQuery = query && query.length > 0 ? format(query) : '';

  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: '100%', // Ensure the Paper never exceeds its container's width
        margin: '2rem 0',
        padding: '20px',
        height: '80vh', // Fixed height for the entire Paper
        border: '1px solid #ccc',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',   // Enable vertical scrolling for the entire Paper
        overflowX: 'hidden', // Prevent horizontal scrolling on the Paper itself
      }}
    >
      {/* Title */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {/* User Query */}
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
        User Query:
      </Typography>
      <Box
        sx={{
          padding: '1rem',
          backgroundColor: theme.palette.background.default,
          borderRadius: '8px',
          mb: 2,
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
          {userQuery || 'No user query yet.'}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* SQL Display */}
      {showSQL && (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Generated SQL:
          </Typography>
          <Box
            sx={{
              padding: '1rem',
              backgroundColor: theme.palette.background.default,
              borderRadius: '8px',
              mb: 2,
              width: '100%',
              maxHeight: '200px', // Limit SQL block height
              overflowY: 'auto',  // Scroll SQL block vertically if content is too tall
            }}
          >
            {userQuery && !query ? (
              // Center CircularProgress in SQL code block
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Typography
                variant="body2"
                sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
              >
                {cleared
                  ? 'No SQL Query yet.'
                  : formattedQuery ||
                    'No SQL generated. Please ask a question to generate SQL.'}
              </Typography>
            )}
          </Box>
          <Divider sx={{ my: 2 }} />
        </>
      )}

      {/* Data Results */}
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
        Data Results:
      </Typography>
      {/* Container that allows horizontal scrolling for the DataGrid */}
      <Box sx={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
        <Box sx={{ width: 'max-content' }}>
          {data && data.length > 0 ? (
            <DataGrid
              rows={data}
              columns={columns}
              getRowId={(row) =>
                row.customer_id ||
                row.account_id ||
                row.id ||
                `${Math.random()}-${Date.now()}`
              }
              autoHeight
              disableSelectionOnClick
              pageSize={5}
              rowsPerPageOptions={[5, 10, 25]}
            />
          ) : userQuery ? (
            // Center CircularProgress for Data Results loading state
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px',
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Typography variant="body2">No data yet.</Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default DataDisplay;
