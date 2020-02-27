const express = require('express')

const walkerData = require('../db/walkerData')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    walkerData.getWalkers()
        .then(walker => {
            return res.json(walker)
        })
})

router.get('/:id', (req, res) => {
    console.log(walkerData.getWalker(req.params))
    walkerData.getWalker(req.params)
        .then(response => {
            return response
        })
    // .then(walker => {
    //     console.log(walker)
    //     return res.json(walker)
    // })
})

module.exports = router 