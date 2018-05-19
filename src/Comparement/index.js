import React from 'react'

import styled, { ThemeProvider } from 'styled-components'
import Aux from 'react-aux'

import StyledButton from './StyledButton'
import Button from './Button'

const theme = {
  bgColor: 'mediumseagreen',
  bgColorPrimary: 'dodgerblue',
  colorPrimary: 'white',
  color: 'white',
}

class Comparement extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Aux>
          <StyledButton primary>Styled</StyledButton>
          <Button primary>CSS Styled</Button>
          <br />
          <StyledButton>Styled</StyledButton>
          <Button>CSS Styled</Button>
        </Aux>
      </ThemeProvider>
    )
  }
}

export default Comparement
