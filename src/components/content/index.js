import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import Styled from './styles'

class Content extends React.Component {
  render() {
    const { title, summary, links, colors, usePatternBacking } = this.props
    return (
      <Styled.Container usePatternBacking={usePatternBacking}>
        <Styled.TextContainer rightAlign={usePatternBacking}>
          <Styled.Header color={colors.primary}>{title}</Styled.Header>
          <Styled.LinkContainer>
            {links.map((link, index) => (
              <Icon key={index} name={link.icon} href={link.href} />
            ))}
            <Styled.GradientLine rightAlign={usePatternBacking} colors={colors} />
          </Styled.LinkContainer>
          <Styled.Summary colors={colors}>
            {summary}
          </Styled.Summary>
        </Styled.TextContainer>
      </Styled.Container>
    )
  }
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.element.isRequired,
  links: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
  usePatternBacking: PropTypes.bool,
}

export default Content