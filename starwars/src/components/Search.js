import React from "react";
import styled from "styled-components";

const Search = ({ search, setSearch }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        value={search}
        placeholder="Search for the Force"
        onChange={event => setSearch(event.target.value)}
      />
    </StyledSearch>
  );
};

export default Search;
