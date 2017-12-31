module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: 'Alex Pate',
    title: `Alex Pate - UI Engineer`,
    siteUrl: 'https://alexpate.uk',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 740,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-41936976-3',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
  ],
};
