import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {
  Container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3em;
  `,
  Text: styled.h1`
    font-size: 10em;
    font-family: ${props => props.theme.header.fontFamily};
    color: ${props => props.theme.gray95};
  `
}

const BackgroundTitle = ({ text }) => (
  <Styled.Container>
    <Styled.Text>{text}</Styled.Text>
  </Styled.Container>
)

BackgroundTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default BackgroundTitle