const express = require('express')
const db = require('../db/dogData')
const router = express.Router()

router.get('/', (req, res) => {
    db.getDogOwner(id)
        .then(response => {
            res.json(response)
        })
})

module.exports = router