const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/ownerData')
const router = express.Router()

router.get('/', (req, res) => {
    db.getOwners()
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
    db.addOwner(owner)
        .then(id => {
            res.json({ id: id[0] })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({})
        })

})


router.get('/', (req, res) => {
    db.getOwners()
        .then(owners => {
            res.json(owners)
        })
})

router.post('/', (req, res) => {
    let owner = req.body

    db.addOwner(owner.first_name, owner.last_name, owner.photo, owner.location, owner.email)
        .then(id => {
            res.json({})
        })
})

router.get('/:id', (req, res) => {
    db.getOwner(req.params.id)
        .then(owner => {
            res.json(owner)
        })
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let owner = req.body

    db.updateOwner(id, owner)
    .then(response => {
        res.json({})
    })
})


module.exports = router 
