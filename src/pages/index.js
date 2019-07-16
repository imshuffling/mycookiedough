import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ContentModules from '../content-modules'
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
  const {
    blocks
  } = data.allContentfulPage.edges[0].node

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
        {blocks && <ContentModules blocks={blocks} />}
      </>
    </Layout>
  )
}

export const query = graphql`
    query homepageQuery {
      allContentfulPage(filter:{slug:{eq:"/"}}) {
        edges {
          node {
            id
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
      }
    }
`
