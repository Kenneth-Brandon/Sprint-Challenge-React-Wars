import React from "react";
import styled from "styled-components";

const StyledSearch = styled.form`
  width: 100%;

  input {
    width: 50%;
    height: 50px;
    margin: 2rem;
    padding: 0 1rem;
    border: 1px solid #000000;
    background-color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    text-align: center;
  }
`;

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
