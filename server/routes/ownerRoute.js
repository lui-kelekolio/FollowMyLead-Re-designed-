const express = require('express')
const router = express.Router()
const db = require('../db/ownerData')

router.get('/', (req,res) =>{
    db.getOwner()
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







module.exports = router
