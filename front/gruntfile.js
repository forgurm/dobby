module.exports = function (grunt) {
  // Configure grunt
  grunt.initConfig({
    sprite: {
      all: {
        src: '/src/assets/img/common/*.png',
        dest: '/src/assets/img/icons.png',
        destCss: '/src/assets/img/css/sprites.css'
      }
    }
  })

  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith')
}
