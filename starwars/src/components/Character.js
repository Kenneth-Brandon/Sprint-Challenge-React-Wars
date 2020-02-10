import React from "react";
import styled from "styled-components";

const Character = props => {
  return (
    <StyledCharacter>
      <h2>Name: {props.name}</h2>
      <p>Birth Year: {props.birth_year}</p>
      <p>Gender: {props.gender}</p>
      <p>Hair Color: {props.hair_color}</p>
      <p>Eye Color: {props.eye_color}</p>
      <p>Mass: {props.mass}kg</p>
      <p>Height: {props.height}cm</p>
      <p>Skin Color: {props.skin_color}</p>
      <p>Number of Film Appearances: {props.films.length}</p>
    </StyledCharacter>
  );
};

export default Character;
