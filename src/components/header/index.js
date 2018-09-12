import React from 'react'
import styled from 'styled-components'

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background: ${props => props.theme.gray10};
    box-shadow: 0 0 2em ${props => props.theme.gray10}, 0 5em 0 ${props => props.theme.gray50}, 0 5em 2em ${props => props.theme.gray50};
    margin-bottom: 5em;
  `
}

const Header = ({ }) => (
  <Styled.Container />
)

export default Header