import styled, { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

//prettier-ignore
const Content = styled.div`
  height: 2em;
  padding: 0.5em;

  background: black;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop`background: dodgerblue;`} 
  ${media.tablet`background: mediumseagreen;`} 
  ${media.phone`background: palevioletred;`};
`

export default Content
