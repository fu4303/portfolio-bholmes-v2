import React from 'react'
import PropTypes from 'prop-types'
import iconData from './icon-data'
import styled from 'styled-components'

const defaultSize = "1.5em"

const Styled = {
  Svg: styled.svg`
    fill: ${props => props.theme.gray50};
    transition: fill 0.2s;
    margin: 0.2em;
    &:hover {
      fill: ${props => props.fill};
    }
  `
}

const Icon = ({ name, href, size }) => {
  const { viewBox, render, color } = iconData[name] || {}
  return (
    <a href={href}>
      <Styled.Svg viewBox={viewBox} fill={color} height={size || defaultSize} width={size || defaultSize}>
        {render}
      </Styled.Svg>
    </a>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default Icon