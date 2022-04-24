module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },

  async redirects() {
    return [
      ...['/maths/:slug*'].map(source => ({ source, destination: '/fiches/maths/:slug*', permanent: true })),
      ...['/i2d/:slug*'].map(source => ({ source, destination: '/fiches/i2d/:slug*', permanent: true })),
      ...['/physique/:slug*'].map(source => ({ source, destination: '/fiches/physique/:slug*', permanent: true }))
    ]
  },
}
