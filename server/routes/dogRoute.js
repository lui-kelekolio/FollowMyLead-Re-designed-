const express = require('express')

const db = require('../db/dogData')

const router = express.Router()

router.get('/', (req, res) => {
    db.getDogs()
        .then(dogs => {

            return res.json(dogs)
        })
})

router.get('/:id', (req, res) => {
    db.getDog(req.params.id)
        .then(dog => {
            res.json(dog)
        })


})

module.exports = router 