import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Icon from '../../components/icon'
import MoreButton from './moreButton'

const Styled = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    background: ${props => props.theme.gray10};
    box-shadow: 0 0 2em ${props => props.theme.gray10}, 0 5em 0 ${props => props.theme.gray50}, 0 5em 2em ${props => props.theme.gray50};
    padding: 0 10%;
    padding-bottom: 5em;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  `,
  Background: styled.div`
    position: absolute;
    top: 0; left: 10%; right: 0; bottom: 0;
  `,
  ImgContainer: styled.div`
    background-image: url("/brush-stroke-mint.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: bottom;
    width: 100%;
    max-width: 80vh;
    z-index: 1;
    animation: sketch-anim 1s ease-out forwards;

    @keyframes sketch-anim {
      from {
        transform: rotate(5deg);
        opacity: 0;
      }
      to {
        transform: rotate(-5deg);
        opacity: 1;
      }
    },
  `,
  Img: styled(Img)`
    height: 90%;
    width: 90%;
  `,
  Name: styled.img`
    width: 100%;
    align-self: flex-end;
    animation: fade 2s ease-out forwards;
    display: inline-block;

    @keyframes fade {
      from { opacity: 0 }
      to { opacity: 1 }
    }
  `,
  Title: styled.section`
    height: 100vh;
    width: 50%;
    min-width: 50vh;
    display: flex;
    align-items: flex-end;
  `,
  Content: styled.section`
    max-width: 25em;
    position: relative;
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
      <Styled.Name src="/Ben-Holmes.svg" alt="Name banner" />
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
