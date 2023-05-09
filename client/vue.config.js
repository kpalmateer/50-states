module.exports = {
  devServer: {
    // tell Vue client to make requests to the api
    proxy: 'http://127.0.0.1:3000'
  }
}
