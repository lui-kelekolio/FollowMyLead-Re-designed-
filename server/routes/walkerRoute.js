const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const walkerData = require('../db/walkerData')

const router = express.Router()

router.get('/', (req, res) => {
    walkerData.getWalkers()
        .then(walker => {
            return res.json(walker)
        })
})

router.get('/:id', (req, res) => {
    walkerData.getWalker(req.params.id)
    .then(walker => {
        res.json(walker)
    })
})

router.post('/', getTokenDecoder(), (req, res) => {
    const walker = req.body
    walker.user_id = req.user.id
    walkerData.addWalker(walker)
        .then(id => {
            res.json({ id: id[0] })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({})
        })

})

module.exports = router 