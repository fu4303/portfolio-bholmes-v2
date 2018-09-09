import React from 'react'
import PropTypes from 'prop-types'
import sections from './section-data'
import styled from 'styled-components'

const Container = ({ render }) => (
  <div className="">
    {render(sections)}
  </div>
)

Container.propTypes = {
  render: PropTypes.func.isRequired,
}

export default Container

