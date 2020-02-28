const express = require('express')
const router = express.Router()
const db = require('../db/ownerData')

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
