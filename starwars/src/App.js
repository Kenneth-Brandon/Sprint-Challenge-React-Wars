import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import "./App.css";

import Character from "./components/Character";
import PaginationButton from "./components/PaginationButton";
import Search from "./components/Search";

const App = props => {
  const [characters, setCharacters] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [search, setSearch] = useState("");

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

  const initialCharactersUrl = `https://swapi.co/api/people`;

  useEffect(() => {
    getCharacters(initialCharactersUrl);
  }, []);

  if (!characters) return <h1>Loading</h1>;

  const filteredCharacters = characters.filter(character => {
    return character.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <StyledApp className="App">
      <h1 className="Header">React Wars</h1>
      <StyledButtonContainer>
        <PaginationButton
          text="Previous"
          url={previousPageUrl}
          callback={() => getCharacters(previousPageUrl)}
        />
        <PaginationButton
          text="Next"
          url={nextPageUrl}
          callback={() => {
            getCharacters(nextPageUrl);
          }}
        />
        <Search search={search} setSearch={setSearch} />
      </StyledButtonContainer>
      <StyledCharacterContainer>
        {filteredCharacters.map(character => {
          <Character key={character.url} characterData={character} />;
        })}
      </StyledCharacterContainer>
    </StyledApp>
  );
};

export default App;
