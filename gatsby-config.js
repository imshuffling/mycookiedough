const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: 'mycookiedough',
    siteUrl: `https://mycookiedough.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "mycookiedough",
        short_name: "MD",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6c27ae",
        display: "standalone",
        icon: `src/images/android-chrome-512x512.png`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `p7uyoq46fyzo`,
        accessToken: `J3EGxPLXe2tOhvIN0IHJonv6n4qsSgiPZThJj8Ss274`
      },
    },
    'gatsby-plugin-offline',
  ],
};
