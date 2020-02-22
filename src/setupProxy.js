const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy(['/api/statistics', '/api/export'], {
      target: 'http://localhost:5000/'
    }),

    proxy('/api', {
      target: 'http://localhost:8080/'
    })
  )
}
