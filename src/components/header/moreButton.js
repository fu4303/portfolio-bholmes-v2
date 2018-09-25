import React from 'react'
import styled from 'styled-components'
import Icon from '../icon'

const Styled = {
  Button: styled.button`
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    font-size: inherit;
    
  `,
  Text: styled.span`
    font-size: 1.8em;
    font-family: ${props => props.theme.header.fontFamily};
    color: ${props => props.theme.mint};
  `,
  Icon: styled(Icon)`
    margin-left: -1.8em;
    margin-right: 0.8em;
    animation: jiggle 2s infinite;

    @keyframes jiggle {
      0%, 100% {
        transform: translateY(-0.3em);
      }
      50% {
        transform: translateY(0.3em);
      }
    }
  `,
}

const MoreButton = ({ children }) => (
  <Styled.Button disabled={true}>
    <Styled.Icon name="arrowDownCallToAction" initialColor="mint" size="4em" />
    <Styled.Text>
      {children}
    </Styled.Text>
  </Styled.Button>
)

export default MoreButton