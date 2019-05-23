import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {
  Container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding-right: 10rem;
  `,
  Text: styled.h1`
    font-size: 7rem;
    white-space: nowrap;
    transform: rotate(-0.25turn);
    transform-origin: top right;
    font-family: ${props => props.theme.header.fontFamily};
    color: ${props => props.color || '#000000'};
    opacity: 0.08;
  `,
}

const BackgroundTitle = ({ text, color }) => (
  <Styled.Container>
    <Styled.Text color={color}>{text}</Styled.Text>
  </Styled.Container>
)

BackgroundTitle.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default BackgroundTitle
