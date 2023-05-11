let express = require('express')

// pull in the router
let states_api = require('./routes/states')

// import path library
let path = require('path')

// create web server app
let app = express()

// join the location of the code + client directory + dist directory
let vueAppPath = path.join(__dirname, 'client', 'dist')

// point to the Vue app
app.use(express.static(vueAppPath))

// set up the app to handle requests with json data
app.use(express.json())

// make the routes in the States api available at e.g., /api/states
app.use('/api', states_api)

// handle 404 errors caused by a bad request
app.use(function (req, res, next) {
    res.status(404).send('Not found')
})

// error handler for general errors
app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send('Server error')
})

// start the app at the environment port or port 3000 (8080) if none is specified
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('server running on port ', server.address().port)
})
