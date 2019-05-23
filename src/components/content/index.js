import React from 'react'
import PropTypes from 'prop-types'
import { IconLink } from '../icon'
import Styled from './styles'
import { StaticQuery, graphql } from 'gatsby'

const Content = ({
  title,
  summary,
  links,
  mainLink,
  colors,
  rightAlign,
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
      <Styled.Container usePatternBacking={!rightAlign}>
        {img &&
          !rightAlign && (
            <Styled.Img
              sizes={data[img.name].childImageSharp.sizes}
              alt={img.alt}
            />
          )}
        <Styled.TextContainer rightAlign={rightAlign}>
          <Styled.Header color={colors.primary}>{title}</Styled.Header>
          <Styled.LinkContainer>
            {!rightAlign && (
              <Styled.GradientLine rightAlign={rightAlign} colors={colors} />
            )}
            {links &&
              links.map((link, index) => (
                <IconLink key={index} name={link.icon} href={link.href} />
              ))}
            {rightAlign && (
              <Styled.GradientLine rightAlign={rightAlign} colors={colors} />
            )}
          </Styled.LinkContainer>
          <Styled.Summary colors={colors} textColor={textColor}>
            {summary}
          </Styled.Summary>
          {mainLink && (
            <Styled.MainLinkContainer>
              <Styled.MainLink colors={colors} href={mainLink.href}>
                {mainLink.text}
                {mainLink.icon && (
                  <Styled.LinkIcon
                    name={mainLink.icon}
                    size="1.5rem"
                    initialColor="gray3"
                  />
                )}
              </Styled.MainLink>
            </Styled.MainLinkContainer>
          )}
        </Styled.TextContainer>
        {img &&
          rightAlign && (
            <Styled.Img
              sizes={data[img.name].childImageSharp.sizes}
              alt={img.alt}
            />
          )}
      </Styled.Container>
    )}
  />
)

Content.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.element.isRequired,
  links: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
  rightAlign: PropTypes.bool,
  textColor: PropTypes.string,
  data: PropTypes.object,
}

export default Content
