import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Content = ({ title, summary, buttons, usePatternBacking }) => (
  <div className={`content container ${usePatternBacking && "pattern"}`}>
    <h1>{title}</h1>
    {summary}
  </div>
)

Content.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.element.isRequired,
  buttons: PropTypes.array.isRequired,
  usePatternBacking: PropTypes.bool,
}

export default Content