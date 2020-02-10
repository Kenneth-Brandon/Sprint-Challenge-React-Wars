import React from "react";
import styled from "styled-components";

const PaginationButton = props => {
  if (props.url) {
    return <StyledButton onClick={props.callback}>{props.text}</StyledButton>;
  } else {
    return null;
  }
};

export default PaginationButton;
