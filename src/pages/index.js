import React from 'react'
import Container from '../components/container'
import Content from '../components/content'
import BackgroundTitle from '../components/backgroundTitle'
import Header from '../components/header'
import styled, { css } from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Styled = {
  SectionContainer: styled.div`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    ${props =>
      props.backingColor &&
      css`
        background-color: ${props.backingColor};
      `};
  `,
}

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header data={this.props.data} />
        <Container
          render={sections =>
            sections.map((section, index) => (
              <Styled.SectionContainer
                key={index}
                backingColor={section.backingColor}
              >
                <BackgroundTitle text={section.title} />
                {section.content.map((content, index) => (
                  <Content
                    data={this.props.data}
                    key={index}
                    {...content}
                    usePatternBacking={index % 2 === 1}
                    textColor={section.textColor}
                  />
                ))}
              </Styled.SectionContainer>
            ))
          }
        />
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    ...HeaderFragment
    ...ContentFragment
  }
`
