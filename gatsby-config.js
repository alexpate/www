module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: 'Alex Pate',
    title: `Alex Pate - Design & Code`,
    siteUrl: 'https://alexpate.uk',
    defaultTitle: 'Alex Pate - Design & Code',
    defaultDescription:
      'Alex Pate is a digital product designer in London, building things at Kalo. Working somewhere on the boundary between design and code.',
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
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-plugin-sharp',
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
    {
      resolve: `gatsby-plugin-gosquared`,
      options: {
        token: 'GSN-735683-L',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
