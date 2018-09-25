import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Icon from '../../components/icon'
import Name from './name'
import MoreButton from './moreButton'

const Styled = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: ${props => props.theme.gray10};
    box-shadow: 0 0 2em ${props => props.theme.gray10};
    padding: 0 10%;
    padding-bottom: 5em;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  `,
  Background: styled.div`
    position: absolute;
    top: 0; left: 10%; right: 0; bottom: 0;
    overflow: hidden;
  `,
  ImgContainer: styled.div`
    background-image: url("/brush-stroke-mint.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: bottom;
    width: 100%;
    max-width: 80vh;
    overflow: hidden;
    opacity: 0;
    animation: sketch-anim 1s ease-out forwards;
    animation-delay: 1.5s;

    @keyframes sketch-anim {
      from {
        transform: rotate(5deg);
        opacity: 0;
      }
      to {
        transform: rotate(-5deg);
        opacity: 1;
      }
    };
  `,
  Img: styled(Img)`
    height: 90%;
    width: 90%;
  `,
  Name: styled(Name)`
    width: 100%;
    align-self: flex-end;
    z-index: 1;
  `,
  Title: styled.section`
    height: 100vh;
    max-height: calc(1.5 * 100vw);
    width: 50vh;
    max-width: 100vw;
    display: flex;
    align-items: flex-end;
  `,
  Content: styled.section`
    max-width: 25em;
    position: relative;
    opacity: 0;
    animation: fade 1s ease-out forwards;
    animation-delay: 1.5s;

    @keyframes fade {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  MissionStatement: styled.h1`
    font-size: ${props => props.theme.headerOblique.fontSize};
    font-family: ${props => props.theme.headerOblique.fontFamily};
    font-weight: normal;
    margin-bottom: 2em;
    color: ${props => props.theme.gray70};
  `,
  Icon: styled(Icon)`
    margin-bottom: 2em;
  `
}

const links = [
  {
    text: 'GitHub',
    name: 'logoGithub',
    href: 'https://github.com/Holben888',
  },
  {
    text: 'Twitter',
    name: 'logoTwitter',
    href: 'https://twitter.com/BHolmesDev',
  },
  {
    text: 'LinkedIn',
    name: 'logoLinkedin',
    href: 'https://www.linkedin.com/in/benjamin-holmes-706baa151/',
  }
]

const Header = ({ data }) => (
  <Styled.Container>
    <Styled.Background>
      <Styled.ImgContainer>
        <Styled.Img sizes={data.profileImage.childImageSharp.sizes} alt="Ben Holmes self portrait (hand sketch)" />
      </Styled.ImgContainer>
    </Styled.Background>
    <Styled.Title>
      <Styled.Name />
    </Styled.Title>
    <Styled.Content>
      <Styled.MissionStatement>A student developer with a passion for the web.</Styled.MissionStatement>
      {links.map((link, index) => (
        <Styled.Icon key={index} href={link.href} name={link.name} text={link.text} initialColor="gray95" size="2em" />
      ))}
      <MoreButton>More about me</MoreButton>
    </Styled.Content>
  </Styled.Container>
)

export default Header

export const query = graphql`
  fragment HeaderFragment on RootQueryType {
    profileImage: file(relativePath: { eq: "profile-sketch-dark.png" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`
