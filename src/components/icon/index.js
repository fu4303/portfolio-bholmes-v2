import React from 'react'
import PropTypes from 'prop-types'
import iconData from './icon-data'
import styled from 'styled-components'

const defaultSize = "2em"

const Styled = {
  Svg: styled.svg`
    fill: ${props => props.initialColor ? props.theme[props.initialColor] : props.theme.gray50};
    transition: fill 0.2s;
    margin: 0.2em;
    &:hover {
      fill: ${props => props.fill};
    }
  `,
  Text: styled.span`
    padding-left: 1em;
    padding-right: 0.2em;
    padding-top: 0.2em;
    font-size: 1.5em;
    transition: color 0.2s;
    color: ${props => props.initialColor ? props.theme[props.initialColor] : props.theme.gray50};
  `
}

Styled.Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0 0.5em;
  &:hover ${Styled.Svg} {
    fill: ${props => props.color};
  }
  &:hover ${Styled.Text} {
    color: ${props => props.color}
  }
`;

const arrow = iconData['arrowRight']

const Icon = ({ name, href, size, text, initialColor, className }) => {
  const { viewBox, render, color } = iconData[name] || {}
  return (
    <Styled.Link href={href} color={color} className={className}>
      <Styled.Svg viewBox={viewBox} height={size || defaultSize} width={size || defaultSize}
        initialColor={initialColor}>
        {render}
      </Styled.Svg>
      {text && (
        <React.Fragment>
          <Styled.Text initialColor={initialColor}>{text}</Styled.Text>
          <Styled.Svg viewBox={arrow.viewBox} height="1.8em" width="1.8em" initialColor={initialColor}>{arrow.render}</Styled.Svg>
        </React.Fragment>
      )}
    </Styled.Link>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  initialColor: PropTypes.string,
  className: PropTypes.string,
}

export default Icon