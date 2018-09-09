import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import Icon from '../icon'

class Content extends React.Component {
  render() {
    const { title, summary, links, colors, usePatternBacking } = this.props
    const gradientColors = usePatternBacking ? `${colors.secondary}, ${colors.primary}` : `${colors.primary}, ${colors.secondary}`
    return (
      <div className={`content container ${usePatternBacking && "pattern"}`}>
        <div className={`text-container ${usePatternBacking && "rightAlign"}`}>
          <h1 style={{ color: colors.primary }}>{title}</h1>
          <div className='link-container'>
            {links.map((link, index) => (
              <Icon key={index} name={link.icon} href={link.href} />
            ))}
            <div className='line' style={{ background: `linear-gradient(90deg, ${gradientColors})` }}></div>
          </div>
          {summary}
        </div>
      </div>
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