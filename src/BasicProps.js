import React from 'react'
import Aux from 'react-aux'

import styled, { css } from 'styled-components'

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  //prettier-ignore
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `};
`

 export default () => 
  <Aux>
    <Button> Button </Button>
    <Button primary> Primary </Button>
  </Aux>