import React from 'react'
import PropTypes from 'prop-types'
import iconData from './icon-data'
import './styles.css'

const initialState = {
  fill: "hsla(0, 0%, 50%, 1)",
}

const defaultSize = "1.5em"

class Icon extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }
  onMouseEnter = () => {
    this.setState({
      fill: iconData[this.props.name].color,
    })
  }
  onMouseLeave = () => {
    this.setState(initialState)
  }
  render() {
    const { name, href, size } = this.props
    const { viewBox, render } = iconData[name] || {}
    return (
      <a href={href} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon container" viewBox={viewBox} fill={(() => this.state.fill)()}
          height={size || defaultSize} width={size || defaultSize}>
          {render}
        </svg>
      </a>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default Icon