module.exports = {
  browserSync: {
    hostname: "acm-sf.docksal",
    port: 3089,
    ui: false,
    openAutomatically: false,
    reloadDelay: 5000,
    injectChanges: true,
    online: false
  },

  autoprefixerOptions: {
    browsers: [
      'last 2 versions',
      'iOS >= 8',
      'IE >= 11'
    ]
  },

  twig: {
    useCache: false
  }
};
