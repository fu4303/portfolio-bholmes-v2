import React from 'react'
import styled from 'styled-components'
import Brushstroke from '../brushstroke'

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background: ${props => props.theme.gray10};
    box-shadow: 0 0 2em ${props => props.theme.gray10}, 0 5em 0 ${props => props.theme.gray50}, 0 5em 2em ${props => props.theme.gray50};
    margin-bottom: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Content: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(blue, red);
  `
}

const Header = ({ }) => (
  <Styled.Container>
    <Brushstroke frame={600}>
      <Styled.Content />
    </Brushstroke>
  </Styled.Container>
)

export default Header