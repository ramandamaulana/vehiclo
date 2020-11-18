// vue.config.js
module.exports = {
    pages: {
      index: {
          entry : 'src/main.js',
          template: '/public/index.html'
      },
      admin: {
          entry : 'src/main.js',
          template: '/public/login.html'
    }
   }
}