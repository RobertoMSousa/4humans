module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: []
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true
    }
  }],
}
