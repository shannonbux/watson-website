module.exports = {
  siteMetadata: {
    title: `Taking Care of Watson`
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g0b694a663ft`,
        accessToken: `cc94019b03af3894ec87eded57fffd67c6785f1c6fb6b2c3e67ded27682b0c02`,
        host: process.env.GATSBY_CONTENTFUL_HOST
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`
  ]
};
