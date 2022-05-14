module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // other plugin configurations go in here
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111204936-2",
        head: true,
      },
    },
  ],
};
