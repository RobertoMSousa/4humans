module.exports = {
  siteMetadata: {
    title: '4Humans',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-typescript`,
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
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
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint: 'https://click.us10.list-manage.com/subscribe/post?u=47cb86831854d2e6f4a85d28a&amp;id=16ee7f9bde', // see instructions section below
    },
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
