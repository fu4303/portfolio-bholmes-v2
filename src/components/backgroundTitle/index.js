import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const BackgroundTitle = ({ text }) => (
  <div className="background container">
    <h1 className="text">{text}</h1>
  </div>
)

BackgroundTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default BackgroundTitle