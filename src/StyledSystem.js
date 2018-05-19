import React from 'react'
import Aux from 'react-aux'
import styled, { ThemeProvider } from 'styled-components'
import { responsiveStyle, justifyContent } from 'styled-system'

const theme = {
  breakpoints: [32, 48, 64],
}

const backgroundColor = responsiveStyle({
  prop: 'bgColor',
  cssProperty: 'backgroundColor',
})

const Container = styled.div.attrs({
  bgColor: ({ bgColor }) =>
    bgColor || ['mediumseagreen', 'palevioletred', 'dodgerblue'],
  justify: ({ justify }) => justify || ['flex-start', 'center', 'flex-end'],
})`
  display: flex;
  height: 2em;
  padding: 0.5em;
  background-color: black;
  border: white 2px solid;

  ${backgroundColor} ${justifyContent};
`

export default () => (
  <ThemeProvider theme={theme}>
    <Aux>
      <Container
        bgColor={['dodgerblue', 'mediumseagreen', 'palevioletred']}
        justify={['flex-end', 'center', 'flex-start']}
      >
        <div>Custom media</div>
      </Container>
      <Container>
        <div>Default values</div>
      </Container>
    </Aux>
  </ThemeProvider>
)
