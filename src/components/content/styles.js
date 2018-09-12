import styled, { css } from 'styled-components'

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
    max-height: 30em;
    padding: 3em;
    display: flex;
    justify-content: center;
    ${props => props.usePatternBacking && pattern};
  `,
  Header: styled.h1`
    color: ${props => props.color};
    font-family: ${props => props.theme.header.fontFamily};
    font-size: ${props => props.theme.header.fontSize};
  `,
  TextContainer: styled.div`
    max-width: 600px;
    margin: 3em 0;
    ${props => props.rightAlign && 'text-align: right;'}
  `,
  LinkContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  GradientLine: styled.div`
    background: linear-gradient(${props => `${props.rightAlign ? '270deg' : '90deg'}, ${props.colors.primary}, ${props.colors.secondary}`});
    height: 5px;
    margin-left: 1em;
    flex: 1;
  `,
  Summary: styled.p`
    color: ${props => props.theme.gray10};
    & > b {
      color: ${props => props.color};
    }
    & > a {
      text-decoration: none;
      color: ${props => props.color};
    }
  `
}
