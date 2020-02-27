const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const ownerData = require('../db/ownerData')

const router = express.Router()

router.get('/', (req, res) => {
    walkerData.getOwners()
        .then(walker => {
            return res.json(walker)
        })
})

// router.get('/:id', (req, res) => {
//     console.log(walkerData.getWalker(req.params))
//     walkerData.getWalker(req.params)
//         .then(response => {
//             console.log(response)
//             return response
//         })
// })

router.post('/', getTokenDecoder(), (req, res) => {
    console.log('resBody: ', req.body)
    console.log(req.user)
    const owner = req.body
    owner.user_id = req.user.id
    ownerData.addOwner(owner)
        .then(id => {
            res.json({ id: id[0] })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({})
        })

})

module.exports = router 