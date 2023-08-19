module.exports = {
  reactStrictMode: true,
  basePath: '/checkmate'
};
const withPWA = require("next-pwa");
module.exports = withPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
  scope: '/checkmate'
});
