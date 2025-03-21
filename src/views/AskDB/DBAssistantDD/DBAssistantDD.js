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
    // Immediately clear current data.
    setTableData([]);
    setColumns([]);
    setQuery("");
    setUserQuery("");

    // Introduce a slight delay so that the cleared state is visible
    setTimeout(() => {
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
    }, 100);
  };

  return (
    <Box display="block">
      <Header tableSet={handleTableSet} />
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
