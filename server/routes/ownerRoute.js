const express = require('express')
const router = express.Router()
const db = require('../db/ownerData')

router.get('/', (req,res) =>{
    db.getOwners()
    .then(owners => {
        res.json(owners)
    })
})

router.post('/', (req, res) =>{
    let owner = req.body
    console.log(req.body)

    db.addOwner(owner.first_name, owner.last_name, owner.photo, owner.location, owner.email)
    .then(id => {
        res.json({})
    })

})

router.get('/owner/:id', (req,res) => {
    db.getOwner(req.params.id)
    .then(owner => {
        console.log(owner)
    })

    return owner.id == req.params.id 
})







module.exports = router
