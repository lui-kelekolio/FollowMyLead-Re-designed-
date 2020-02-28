const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/userData')
const router = express.Router()

router.get('/:id', (req, res) => {
    db.getUserDetails(req.params.id)
        .then(response => {
            res.json(response)
        })
})

module.exports = router