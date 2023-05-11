// create routes from the app to the database

let express = require('express')

// point to the States model
let States = require('../models').States

// create a router
let router = express.Router()

// use the router to get all states from the database
router.get('/states', function (req, res, next) {
    // order by state name
    States.findAll({order: ['name']}).then( states => {
        return res.json(states)
    })
        // handle errors
        .catch( err => next(err) )
})

// use the router to get a single state
router.get('/state/:name', function (req, res, next) {
    let stateName = req.params.name
    States.findOne( {where: { name: stateName }})
        .then( state => {
            if (state) {
                // convert to json and send to the client
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err) )
})

// use the router to get visited states
router.get('/states/visited', function (req, res, next) {
    // create an array to hold the list of visited states
    // findAll will return an array of states that have been visited
    States.findAll( {where: { visited: true }})
        .then ( states => {
            return res.json(states)
        })
        .catch( err => next(err) )
})

// patch route to update the database
router.patch( '/states/:name', function (req, res, next){
    // params will match the part of the URL using colon notation
    // body will be a json object with the value held in visited
    let stateVisited = req.body.visited

    States.update( { visited: stateVisited }, { where: { name: stateName }})
        .then ( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send('ok')
            }
            return res.status(404).send('State not found')
        })
        .catch( err => next(err))
})

// make the router available to the rest of the app
module.exports = router