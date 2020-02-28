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
    console.log(walkerData.getWalker(req.params))
    walkerData.getWalker(req.params)
        .then(response => {
            console.log(response)
            return response
        })
})

router.post('/', getTokenDecoder(), (req, res) => {
    console.log('resBody: ', req.body)
    console.log(req.user)
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