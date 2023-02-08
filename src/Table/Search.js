import React from "react";
import SearchBar from "material-ui-search-bar";

function EnhancedSearch({ setPage, setRowsPerPage, setRows, originalRows }) {
  const [searched, setSearched] = React.useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.message.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
    setRowsPerPage(filteredRows.length);
    setPage(0);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <SearchBar
      value={searched}
      onChange={(searchVal) => requestSearch(searchVal)}
      onCancelSearch={() => cancelSearch()}
    />
  );
}

export { EnhancedSearch };
