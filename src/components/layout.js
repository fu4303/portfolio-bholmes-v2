import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import GlobalStyles from './globalStyles'

const theme = {
  gray10: 'hsla(0, 0%, 10%, 1)',
  gray30: 'hsla(0, 0%, 30%, 1)',
  gray50: 'hsla(0, 0%, 50%, 1)',
  gray70: 'hsla(0, 0%, 70%, 1)',
  gray95: 'hsla(0, 0%, 95%, 1)',
  mint: '#2BFF88',
  header: {
    fontFamily: 'Avenir-Black',
    fontSize: '2.5em',
  },
  headerOblique: {
    fontFamily: 'Avenir-Oblique',
    fontSize: '2em',
  },
  text: {
    fontFamily: 'Avenir',
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Benjamin Holmes Portfolio' },
            { name: 'keywords', content: 'portfolio, CS' },
          ]}
        />
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
