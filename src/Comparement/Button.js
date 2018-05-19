import React from 'react'
import PT from 'prop-types'
import cx from 'classnames'
import './button.css'
import { withTheme } from 'styled-components'

const Button = ({ children, primary, ...props }) => {
  const className = cx('button', props.className, {
    button_primary: primary,
  })
  const { bgColor, bgColorPrimary, color, colorPrimary } = props.theme
  const theme = {
    backgroundColor: !primary ? bgColor : bgColorPrimary,
    color: !primary ? color : colorPrimary,
  }

  const style = { ...theme, ...props.style }

  return (
    <a className={className} style={style} {...props}>
      {children}
    </a>
  )
}

Button.defaultProps = {
  theme: {
    bgColor: 'transparent',
    primaryBgColor: 'white',
    color: 'white',
    colorPrimary: 'palevioletred',
  },
}

export default withTheme(Button)
