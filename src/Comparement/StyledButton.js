import styled, { css } from 'styled-components'

const theme = field => props => props.theme[field]

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${theme('bgColor')};
  color: ${theme('color')};;
  border: 2px solid white;

  //prettier-ignore
  ${props => props.primary && css`
    background: ${theme('bgColorPrimary')};
    color: ${theme('colorPrimary')};
    font-size: 1.2em;
  `};
`

Button.defaultProps = {
  theme: {
    bgColor: 'transparent',
    primaryBgColor: 'white',
    color: 'white',
    colorPrimary: 'palevioletred'
  },
}

export default Button