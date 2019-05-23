import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Icon } from '../icon'

const pattern = css`
  background-image: url('/icons/cross.svg'), url('/icons/cross.svg');
  background-size: 1em;
  background-position: 0.5em 0.5em, 0 0;
`

export default {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: ${props => (props.usePatternBacking ? 'wrap-reverse' : 'wrap')};
    ${props => props.usePatternBacking && pattern};
  `,
  Header: styled.h1`
    color: ${props => props.color};
    font-family: ${props => props.theme.header.fontFamily};
    font-size: ${props => props.theme.header.fontSize};
    margin: 20px 0;
  `,
  Img: styled(Img)`
    width: 400px;
    max-width: 100%;
    margin: 5%;
  `,
  TextContainer: styled.div`
    max-width: 750px;
    margin: 3em 0;
    position: relative;
    ${props =>
      props.rightAlign &&
      css`
        text-align: right;
      `};
  `,
  LinkContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  GradientLine: styled.div`
    background: linear-gradient(
      ${props =>
        `${props.rightAlign ? '270deg' : '90deg'}, ${props.colors.primary}, ${
          props.colors.secondary
        }`}
    );
    height: 5px;
    ${props =>
      props.rightAlign
        ? css`
            margin-left: 1em;
          `
        : css`
            margin-right: 1em;
          `} flex: 1;
  `,
  Summary: styled.p`
    color: ${props => (props.textColor ? props.textColor : props.theme.gray10)};
    & > b {
      color: ${props => props.colors.primary};
    }
    & > a {
      text-decoration-style: dotted;
      color: ${props => props.colors.primary};
      transition: color 0.3s;
      &:hover {
        color: ${props => props.colors.secondary};
      }
    }
  `,
  MainLinkContainer: styled.div`
    width: 100%;
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  `,
  MainLink: styled.a`
    background-color: ${props => props.colors.primary || '#000'};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: ${props => props.textColor || props.theme.gray3};
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.colors.secondary};
    }
  `,
  LinkIcon: styled(Icon)`
    margin-left: 1.5rem;
    margin-bottom: -0.2rem;
  `,
}
