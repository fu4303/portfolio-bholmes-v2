import React from 'react'
import Container from '../components/container'
import Content from '../components/content'
import BackgroundTitle from '../components/backgroundTitle'
import Header from '../components/header'
import './styles.css'

class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container render={sections => sections.map((section, index) => (
          <div key={index} className="section container">
            <BackgroundTitle text={section.title} />
            {section.content.map((content, index) =>
              <Content key={index} {...content} usePatternBacking={index % 2 === 1} />
            )}
          </div>
        ))} />
      </React.Fragment>
    )
  }
}

export default IndexPage
