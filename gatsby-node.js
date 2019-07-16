const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Page
  const loadPage = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPage.edges.map(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
  return Promise.all([loadPage])
}
