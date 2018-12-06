module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/ero-iine/'
      : '/',
    outputDir: 'docs',
};