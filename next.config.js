/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/brands/utools/all/1',
        permanent: false,
      },
    ]
  },
}
