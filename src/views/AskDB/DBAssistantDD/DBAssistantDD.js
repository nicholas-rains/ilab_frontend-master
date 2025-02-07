import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Header from "../../../components/Header/Header";
import DataDisplay from "../../../components/DataDisplay/DataDisplay";

const DBAssistantDD = () => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [query, setQuery] = useState("");
  const [userQuery, setUserQuery] = useState("");

  // Called from DBChat when a query is submitted.
  const handleTableSet = ({ rows, query, userQuery }) => {
    // Build columns from the keys of the first row.
    if (rows.length > 0) {
      const sampleRow = rows[0];
      const newColumns = Object.keys(sampleRow).map((key) => ({
        field: key,
        headerName: key,
        width: 200,
      }));
      setColumns(newColumns);
    } else {
      setColumns([]);
    }
    setTableData(rows);
    setQuery(query);
    setUserQuery(userQuery);
  };

  return (
    <Box display="block">
      <Header tableSet={handleTableSet} />
      {/* Use a full-width container */}
      <Container maxWidth={false} sx={{ mt: 2, px: 2 }}>
        <DataDisplay
          data={tableData}
          columns={columns}
          title="Query Results"
          query={query}
          userQuery={userQuery}
        />
      </Container>
    </Box>
  );
};

export default DBAssistantDD;
