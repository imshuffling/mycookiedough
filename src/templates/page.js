import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ContentModules from '../content-modules'

export default ({ data }) => {
    //console.log(data)
    const {
        title,
      blocks
    } = data.contentfulPage

    // const Bold = ({ children }) => <strong>{children}</strong>
    // const Text = ({ children }) => <p className="align-center">{children}</p>

    // const options = {
    //     renderMark: {
    //         [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    //     },
    //     renderNode: {
    //         [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    //     },
    // }

    return (
        <Layout>
            <>
                <h1>{title}</h1>
                {blocks && <ContentModules blocks={blocks} />}
            </>
        </Layout>
    )
}

export const query = graphql`
    query pageQuery($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
            title
            blocks {
                __typename
                ... on ContentfulBlockVideo {
                  id
                  video {
                      file {
                        url
                      }
                  }
                }
                ... on ContentfulBlockText {
                    id
                    body {
                      json
                    }
                }
                ... on ContentfulBlockImage {
                    id
                    image {
                      id
                      fluid(maxWidth: 1200) {
                          ...GatsbyContentfulFluid_withWebp
                      }
                    }
                  }
            }
        }
    }
`