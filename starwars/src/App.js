import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import "./App.css";

import Character from "./components/Character";
import PaginationButton from "./components/PaginationButton";
import Search from "./components/Search";

const StyledApp = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledButtonContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const StyledCharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [search, setSearch] = useState("");

  const initialCharactersUrl = `https://swapi.co/api/people`;

  function getCharacters(characterUrl) {
    axios.get(characterUrl).then(response => {
      console.log(response.data);
      setNextPageUrl(response.data.next);
      setPreviousPageUrl(response.data.previous);
      setCharacters(response.data.results);
      console.log(
        "Pagination Urls: ",
        response.data.next,
        response.data.previous
      );
    });
  }

  useEffect(() => {
    getCharacters(initialCharactersUrl);
  }, [initialCharactersUrl]);

  if (!characters) return <h1>Loading</h1>;

  const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <StyledApp className="App">
      <h1 className="Header">React Wars</h1>
      <StyledButtonContainer>
        <PaginationButton
          text="Next"
          url={nextPageUrl}
          callback={() => {
            getCharacters(nextPageUrl);
          }}
        />
        <PaginationButton
          text="Previous"
          url={previousPageUrl}
          callback={() => getCharacters(previousPageUrl)}
        />
        <Search search={search} setSearch={setSearch} />
      </StyledButtonContainer>
      <StyledCharacterContainer>
        {filteredCharacters.map(character => (
          <Character key={character.url} characterData={character} />
        ))}
      </StyledCharacterContainer>
    </StyledApp>
  );
};

export default App;
