module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/assets/`,
      },
    },
    // {
    //   resolve: "@mkitio/gatsby-theme-password-protect",
    //   options: {
    //     password: "iZJDEdNzcQ84MNkmVV",
    //   },
    // },
  ],
}
