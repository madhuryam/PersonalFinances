const path = require('path');

module.exports = {
    serve: {
         host: 'localhost',
         port: 8080,
         proxyTable: {
             '/api': {
                 target: 'http://localhost:5000',
                 changeOrigin: true
             }
         },
         autoOpenBrowser: true,
    }
}