import React from 'react'
import { Button } from './BasicProps'
import styled, { css } from 'styled-components'
import Aux from 'react-aux'

const ExtendedButton = Button.extend`
  border-radius: 50%;

  ${props => props.primary && css`border-radius: 0px;`};
`

const NonSCButton = ({ className, ...props }) => (
  <a className={className} {...props} />
)

const StyledNonScButton = styled(NonSCButton)`
  display: inline-block;
  font-size: 2em;
  background-color: dodgerblue;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  border: 2px solid white;
`

const StyledNonScButtonTwo = Button.withComponent(NonSCButton).extend`
  font-size: 1em;
  color: mediumseagreen;
`

export default () => (
  <Aux>
    <ExtendedButton> Extended SC Button </ExtendedButton>
    <ExtendedButton primary> Extended SC Button </ExtendedButton>
    <br />
    <StyledNonScButton> Styled Non S-C </StyledNonScButton>
    <br />
    <StyledNonScButtonTwo> Styled Non S-C Reused Styles </StyledNonScButtonTwo>
    <StyledNonScButtonTwo primary>
      Styled Non S-C Reused Styles
    </StyledNonScButtonTwo>
  </Aux>
)
