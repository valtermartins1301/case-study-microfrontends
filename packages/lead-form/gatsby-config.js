module.exports = {
  siteMetadata: {
    title: `Creditas`,
    description: `Creditas lead form`,
    author: `valter.martins@creditas.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `creditas-form`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#44a19e`,
        theme_color: `#44a19e`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
