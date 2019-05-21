import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import Styled from './styles'
import { StaticQuery, graphql } from 'gatsby'

const Content = ({
  title,
  summary,
  links,
  colors,
  usePatternBacking,
  textColor,
  img,
}) => (
  <StaticQuery
    query={graphql`
      query {
        snagImage: file(relativePath: { eq: "Snag-sketch.png" }) {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
        gdgImage: file(relativePath: { eq: "GDG-sketch.png" }) {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Styled.Container usePatternBacking={usePatternBacking}>
        {img && (
          <Styled.Img
            sizes={data[img.name].childImageSharp.sizes}
            alt={img.alt}
          />
        )}
        <Styled.TextContainer rightAlign={usePatternBacking}>
          <Styled.Header color={colors.primary}>{title}</Styled.Header>
          <Styled.LinkContainer>
            {!usePatternBacking && (
              <Styled.GradientLine
                rightAlign={usePatternBacking}
                colors={colors}
              />
            )}
            {links &&
              links.map((link, index) => (
                <Icon key={index} name={link.icon} href={link.href} />
              ))}
            {usePatternBacking && (
              <Styled.GradientLine
                rightAlign={usePatternBacking}
                colors={colors}
              />
            )}
          </Styled.LinkContainer>
          <Styled.Summary colors={colors} textColor={textColor}>
            {summary}
          </Styled.Summary>
        </Styled.TextContainer>
      </Styled.Container>
    )}
  />
)

Content.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.element.isRequired,
  links: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
  usePatternBacking: PropTypes.bool,
  textColor: PropTypes.string,
  data: PropTypes.object,
}

export default Content
