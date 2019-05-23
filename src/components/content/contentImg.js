import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {
  Img: styled(Img)`
    width: 400px;
    max-width: 100%;
    margin: 5%;
  `,
  StaticImg: styled.img`
    width: 400px;
    max-width: 100%;
    margin: 5%;
  `,
}

const ContentImg = ({ name, alt }) => (
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
        gbaImage: file(relativePath: { eq: "gba-preview.gif" }) {
          publicURL
        }
      }
    `}
    render={data =>
      data[name].publicURL ? (
        <Styled.StaticImg src={data[name].publicURL} alt={alt} />
      ) : (
        <Styled.Img sizes={data[name].childImageSharp.sizes} alt={alt} />
      )
    }
  />
)

ContentImg.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default ContentImg
