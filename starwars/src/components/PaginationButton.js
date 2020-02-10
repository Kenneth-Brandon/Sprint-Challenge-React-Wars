import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 auto;
  border: 3px solid #000000;
  border-radius: 25%;
  font-size: 2rem;
  background-color: #d2b48c;
  box-shadow: 5px 10px #000000;
  color: #000000;
`;

const PaginationButton = props => {
  if (props.url) {
    return <StyledButton onClick={props.callback}>{props.text}</StyledButton>;
  } else {
    return null;
  }
};

export default PaginationButton;
