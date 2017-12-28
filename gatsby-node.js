const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/article.js`);
  return graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            timeToRead
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Create pages for each markdown file.
    posts.forEach(({node}, index) => {
      const prev = index === 0 ? false : posts[index - 1].node;
      const next = index === posts.length - 1 ? false : posts[index + 1].node;
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      });
    });

    return posts;
  });
};

exports.modifyWebpackConfig = function({config, env}) {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      extensions: ['', '.js', '.jsx', '.json'],
    },
  });
  return config;
};
