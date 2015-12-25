var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest,
      open: false
    }
  },

  autoprefixer: {
    browsers: ['last 2 version']
  },

  style: {
    src: [
      src + '/assets/stylesheets/**/*.scss',
      src + '/components/**/*.scss'
    ],
    dest: dest + '/assets/stylesheets/',
    buildName: 'app.css',
    settings: {
      style: 'expanded'
    }
  },

  images: {
    src: src + '/assets/images/**',
    dest: dest + '/assets/images'
  },

  markup: {
    layout: src + '/layout/layout.jade',
    src: src + '/states/**/*.jade',
    dest: dest,

    // for build components
    srcComponents: src + '/components/**/*.jade',
    destComponents: dest + '/components/'
  },

  production: {
    cssSrc: dest + '/assets/stylesheets/',
    jsSrc: dest + '/assets/javascript/',
    dest: dest
  }
};
