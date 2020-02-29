const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/walkerData')
const router = express.Router()


router.get('/', (req, res) => {
    db.getWalkers()
        .then(walker => {
            res.json(walker)
        })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    db.getWalker(req.params.id)
        .then(response => {
            res.json(response)
        })
})

router.post('/', getTokenDecoder(), (req, res) => {
    const walker = req.body
    walker.user_id = req.user.id
    db.addWalker(walker)
        .then(id => {
            res.json({ id: id[0] })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({})
        })

})


router.put('/', getTokenDecoder(), (req,res) =>{
    let newWalker = req.body
    console.log('route yay')
    try{
        const walker = db.editWalker(newWalker)
                res.json(walker)
    } catch(err) {
        res.status(500).send(err.message)
    }
})

module.exports = router 