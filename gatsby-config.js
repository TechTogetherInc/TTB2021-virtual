module.exports = {
  siteMetadata: {
    title: "TTB2021-virtual",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-150897843-1",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
