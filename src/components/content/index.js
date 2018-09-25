import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import Styled from './styles'

class Content extends React.Component {
  render() {
    const { title, summary, links, colors, usePatternBacking, textColor } = this.props
    return (
      <Styled.Container usePatternBacking={usePatternBacking}>
        <Styled.TextContainer rightAlign={usePatternBacking}>
          <Styled.Header color={colors.primary}>{title}</Styled.Header>
          <Styled.LinkContainer>
            {!usePatternBacking && <Styled.GradientLine rightAlign={usePatternBacking} colors={colors} />}
            {links && links.map((link, index) => (
              <Icon key={index} name={link.icon} href={link.href} />
            ))}
            {usePatternBacking && <Styled.GradientLine rightAlign={usePatternBacking} colors={colors} />}
          </Styled.LinkContainer>
          <Styled.Summary colors={colors} textColor={textColor}>
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
  textColor: PropTypes.string,
}

export default Content