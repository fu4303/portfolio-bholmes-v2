import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const pathSize = 500

const Styled = {
  Svg: styled.svg`
    position: absolute;
    top: ${props => props.top}px;
    left: 0; right: 0; bottom: 0;
  `,
  Path: styled.path`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    stroke-dasharray: ${pathSize};
    stroke-dashoffset: ${pathSize};
    animation: dash ${props => props.duration}s linear forwards;
    animation-delay: ${props => props.delay}s;
    stroke: #FFF;
    fill: transparent;
    stroke-width: 4px;

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  `,
  Container: styled.div`
    width: ${props => props.frame}px;
    height: ${props => props.frame}px;
    position: relative;
  `,
  Content: styled.div`
    position: absolute;
    top: ${props => props.frame * 0.1}px; left: ${props => props.frame * 0.1}px; right: 0; bottom: 0;
    width: ${props => props.frame * 0.8}px;
    height: ${props => props.frame * 0.8}px;
  `
}

const paths = [
  'M159.1,292.6c0,0,15.4-62,265.9-77.1c0,0,68.2-1.5,62.7-16.8',
  'M487.8,198.8c-3.6-15.3-61.4-16.3-61.4-16.3S81,189.7,79.7,189.7c-28,0.9-74-2.7-72.2-14.4',
  'M7.4,175.4c1.8-8.3-5.3-17.9,239.2-34.3c68.9-4.6,118.8-7.4,154.6-11.1c41.4-4.3,97.3-6.1,91.9-19.8',
  'M493.2,110.2c-3.6-15.3-61.4-16.3-61.4-16.3s-345.4,7.3-346.7,7.3c-28,0.9-74-2.7-72.2-14.4',
  'M12.9,86.8c0-19.9,56-34.3,186-41.5S370.4,7.4,370.4,7.4',
]

const Svg = ({ frameWidth, frameHeight, behindContent }) => {
  let currDelay = 0.5
  const topPositioning = frameWidth * 0.3
  return (
    <Styled.Svg width={`${frameWidth}px`} height={`${frameHeight}px`} viewBox={`0 0 ${pathSize} ${pathSize * 0.6}`} top={topPositioning}>
      {paths.map((path, index) => {
        const duration = index / 10 + 0.2
        const el = (behindContent) ?
          index % 2 == 1 ? <Styled.Path key={index} delay={currDelay} duration={duration} d={path} /> : null
          :
          index % 2 == 0 ? <Styled.Path key={index} delay={currDelay} duration={duration} d={path} /> : null
        currDelay += duration
        return el
      })}
    </Styled.Svg>
  )
}

const Brushstroke = ({ frame, children }) => (
  <Styled.Container frame={frame}>
    <Svg frameWidth={frame} frameHeight={frame * 0.6} behindContent />
    <Styled.Content frame={frame}>
      {children}
    </Styled.Content>
    <Svg frameWidth={frame} frameHeight={frame * 0.6} />
  </Styled.Container>
)

Brushstroke.propTypes = {
  frame: PropTypes.number.isRequired,
  children: PropTypes.object,
}

export default Brushstroke