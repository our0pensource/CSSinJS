import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Aux from 'react-aux'

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

// We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
}

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
}

export default () => (
  <Aux>
    <Button>I have no theme!</Button>
    <ThemeProvider theme={theme}>
      <Button>But I do!</Button>
    </ThemeProvider>
  </Aux>
)
