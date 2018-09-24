import React from 'react'
import Container from '../components/container'
import Content from '../components/content'
import BackgroundTitle from '../components/backgroundTitle'
import Header from '../components/header'
import styled from 'styled-components'

const Styled = {
  SectionContainer: styled.div`
    position: relative;
  `
}

class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header data={this.props.data} />
        <Container render={sections => sections.map((section, index) => (
          <Styled.SectionContainer key={index}>
            <BackgroundTitle text={section.title} />
            {section.content.map((content, index) =>
              <Content key={index} {...content} usePatternBacking={index % 2 === 1} />
            )}
          </Styled.SectionContainer>
        ))} />
      </React.Fragment>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    ...HeaderFragment
  }
`
