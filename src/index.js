import React from 'react'
import { render } from 'react-dom'
import Aux from 'react-aux'

import styled, { ThemeProvider } from 'styled-components'
import Basic from './Basic'
import BasicPropsExample from './BasicProps'
import ExtensionExample from './Extension'
import Rotate from './Rotate'
import Media from './Media'
import ThemingExample from './Theming'
import PolishedExample from './Polished'
import Comparement from './Comparement'
import StyledComponentsVsGlamExample from './StyledComponentsVsGlam'
import StyledSystem from './StyledSystem'

const Container = styled.div`
  align-items: center;
  text-align: center;
  color: white;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.17);
  box-sizing: border-box;
  min-height: 100vh;
  font-family: sans-serif;
  font-size: 20px;
  // don't do like that i'm lazy here
  a {
    cursor: pointer;
  }
`

const Separator = styled.hr`
  height: 5vw;
  background-color: white;
  border: none;
  margin: 0;
`

const Header = styled.h1`
  display: block;
  text-align: center;
  padding: 0.5em;
`

const Split = ({ children }) => (
  <Aux>
    <Separator />
    <Header>{children}</Header>
  </Aux>
)

const App = () => (
  <Container>
    <Header>Basic:</Header>
    <Basic />

    <Split>Basic props:</Split>
    <BasicPropsExample />

    <Split>Basic extension / Non S-C styling:</Split>
    <ExtensionExample />

    <Split>Keyframes</Split>
    <Rotate>&lt; 💅 &gt;</Rotate>

    <Split>Media query:</Split>
    <Media>Media queries!</Media>

    <Split>Theming:</Split>
    <ThemingExample />

    <Split>Polished.js:</Split>
    <PolishedExample />

    <Split>Comparement:</Split>
    <Comparement />

    <Split>💅/💄:</Split>
    <StyledComponentsVsGlamExample />

    <Split>styled-system:</Split>
    <StyledSystem />
    <Separator />
  </Container>
)

render(<App />, document.getElementById('root'))
