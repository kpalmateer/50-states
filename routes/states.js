// create routes from the app to the database

let express = require('express')

// point to the States model
let States = require('../models').States

// create a router
let router = express.Router()

// use the router to get data from the database
router.get('/states', function (req, res, next) {
    // order by state name
    States.findAll({order: ['name']}).then( states => {
        return res.json(states)
    })
    // handle errors
        .catch( err => next(err) )
})

// patch route to update the database
router.patch( '/states/:name', function (req, res, next){
    // params will match the part of the URL using colon notation
    let stateName = req.params.name
    // body will be a json object with the value held in visited
    let stateVisited = req.body.visited

    States.update( { visited: stateVisited}, { where: { name: stateName}})
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