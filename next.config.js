module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ]
  }
}
