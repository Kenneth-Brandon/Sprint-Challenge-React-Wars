import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  background-color: #ffffff;
  padding: 15px 50px;
  margin: 20px 10px;
  border-radius: 10%;
  flex-basis: 20%;
`;

const H2 = styled.h2`
  margin: 0 auto;
  font-size: 1.8rem;
`;

const Character = ({ characterData }) => {
  return (
    <StyledCharacter>
      <H2>Name: {characterData.name}</H2>
      <p>Birth Year: {characterData.birth_year}</p>
      <p>Gender: {characterData.gender}</p>
      <p>Hair Color: {characterData.hair_color}</p>
      <p>Eye Color: {characterData.eye_color}</p>
      <p>Mass: {characterData.mass}kg</p>
      <p>Height: {characterData.height}cm</p>
      <p>Skin Color: {characterData.skin_color}</p>
      <p>Number of Film Appearances: {characterData.films.length}</p>
    </StyledCharacter>
  );
};

export default Character;
