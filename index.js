require("babel-polyfill") //regeneratorRuntime for async/await

//if not production...
require("babel-register")

const server = require('./app')

server.start(function () {
    console.log('api server running at:', server.info.uri)
})