const express = require('express')

const dogData = require('../db/dogData')

const router = express.Router()

router.get('/', (req, res) => {
    dogData.getDog()
        .then(dogs => {

            return res.json(dogs)
        })
})

module.exports = router 