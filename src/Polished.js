import React from 'react'
import Aux from 'react-aux'

import styled, { css } from 'styled-components'
import { lighten, complement } from 'polished'

const palevioletred = '#db7093'
const white = '#ffffff'

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: palevioletred;
  color: white;
  border: 2px solid white;

  &:hover {
    background: ${lighten(0.1, palevioletred)};
  }
  //prettier-ignore
  ${props => props.complement && css`
    background: ${complement(palevioletred)};

    &:hover {
      background: ${lighten(0.1, complement(palevioletred))};
    }
  `};
`

export default () => 
  <Aux> 
    <Button> Polished! </Button>
    <Button complement> Polished! </Button>
  </Aux>
