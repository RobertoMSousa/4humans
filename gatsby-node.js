const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const bookTemplate = path.resolve(`src/templates/book.tsx`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            title
            date
            path
            imageIndex {
							childImageSharp {
							  resize(width: 800) {
                  src
							  }
							}
						}
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // console.log('node-->', node.path.match(/^\/book/) ); // roberto
      // console.log('node-->', node.frontmatter.path.match(/^\/book/) ); // roberto
      if (node.frontmatter.path.match(/^\/book/)) {
        createPage({
          path: node.frontmatter.path,
          component: bookTemplate,
          context: {} // additional data can be passed via context
        });
      }
      else {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {} // additional data can be passed via context
        });
      }
    });
  });
};