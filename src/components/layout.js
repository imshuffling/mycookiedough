import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticQuery, graphql } from "gatsby"
import '../styles/index.scss'
import 'typeface-pt-sans'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        contentfulNavigation {
          menuItem {
          __typename
            ... on ContentfulPage {
              title
              slug
            }
          }
        }
      }
  `}
  render={data => (
    <section className="container-wrap">
      <Helmet
        title="mycookiedough"
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
        ]}
      />
      <Header nav={data} />
      {children}
      <Footer />
    </section>
    )}
  />
)

export default Layout
