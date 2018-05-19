import React from "react";
import Aux from "react-aux";
import styled, { css } from "styled-components";
import glamorous from "glamorous";

export const StyledButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props =>
    props.primary &&
    css`
      background: white;
      color: red;
    `};
`;

export const GlamButton = glamorous.a(
  {
    display: "inline-block",
    borderRadius: "3px",
    padding: "0.5rem 0",
    margin: "0.5rem 1rem",
    width: "11rem",
    background: "transparent",
    color: "white",
    border: "2px solid white"
  },
  props =>
    props.primary && {
      background: "white",
      color: "palevioletred"
    }
);

export default () => (
  <Aux>
    <StyledButton primary>Styled 💅</StyledButton>
    <GlamButton primary> Glam 💄</GlamButton>
  </Aux>
);
