import React from 'react'
import PropTypes from 'prop-types'
import { IconLink } from '../icon'
import ContentImg from './contentImg'
import Styled from './styles'

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
  <Styled.Container usePatternBacking={rightAlign}>
    {img && !rightAlign && <ContentImg {...img} />}
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
          <Styled.MainLink
            colors={colors}
            textColor={mainLink.color}
            href={mainLink.href}
          >
            {mainLink.text}
            {mainLink.icon && (
              <Styled.LinkIcon
                name={mainLink.icon}
                size="20px"
                initialColor="gray3"
              />
            )}
          </Styled.MainLink>
        </Styled.MainLinkContainer>
      )}
    </Styled.TextContainer>
    {img && rightAlign && <ContentImg {...img} />}
  </Styled.Container>
)

Content.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.element.isRequired,
  links: PropTypes.array,
  colors: PropTypes.object.isRequired,
  rightAlign: PropTypes.bool,
  textColor: PropTypes.string,
  data: PropTypes.object,
}

export default Content
