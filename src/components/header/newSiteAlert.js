import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon'

const Styled = {
  AlertIcon: styled.div`
    border-radius: 50%;
    background: white;
    margin-right: 3rem;
    position: relative;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    align-self: center;
    ::before {
      content: '';
      background: inherit;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      position: absolute;
      border-radius: inherit;
      animation: pulse 3s linear infinite;
      z-index: -1;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      40% {
        transform: scale(1.3);
        opacity: 0.4;
      }
      60% {
        opacity: 0;
        transform: scale(1.3);
      }
      100% {
        opacity: 0;
        transform: scale(1.3);
      }
    }
  `,
  ArrowIcon: styled(Icon)`
    margin: -0.6rem 0.5rem;
  `,
}

Styled.Container = styled.div`
  border-radius: 0.5rem;
  background: #ce4650;
  max-width: 80rem;
  width: 100%;
  margin: auto;
  margin-top: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    color: white;
    margin: 0;
    font-size: 1em;
  }
  p .bold {
    font-weight: bold;
    font-size: 1.5em;
  }
  a {
    font-size: 1.2em;
  }

  @media (max-width: 50rem) {
    flex-direction: row-reverse;
    padding: 1.5rem;

    & > div {
      align-self: flex-start;
    }

    ${Styled.AlertIcon} {
      width: 2rem;
      height: 2rem;
      flex: 1;
      margin: 0;
      margin-left: 1rem;
    }
  }
`

const NewSiteAlert = () => (
  <Styled.Container>
    <div>
      <Styled.AlertIcon>
        <Icon name="alert" initialColor="#ce4650" size="50%" />
      </Styled.AlertIcon>
    </div>
    <p>
      <span className="bold">
        A nifty redesign of the site is in the works!
        <br />
      </span>
      <a href="https://xd.adobe.com/view/fca250b0-5963-415d-5fcd-709f67321f2d-8a93/">
        <br />
        Check out the latest mockups
        <Styled.ArrowIcon name="arrowRight" initialColor="white" size="1.8em" />
      </a>
    </p>
  </Styled.Container>
)

export default NewSiteAlert
