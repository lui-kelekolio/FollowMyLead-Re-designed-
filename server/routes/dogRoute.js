const express = require('express')

const db = require('../db/dogData')

const router = express.Router()

router.get('/', (req, res) => {
    db.getDogs()
        .then(dogs => {

            return res.json(dogs)
        })
})

router.get('/:id', (req, res) => {
    db.getDog(req.params.id)
        .then(dog => {
            res.json(dog)
        })


})

router.post('/register/dog', (req, res) => {
    let dog = req.body

    db.addDog(dog)
        .then(id => {
            res.json({ id: id[0] })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({})
        })
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let dog = req.body

    db.updateDog(id, dog)
    .then(response => {
        res.json({})
    })
})

router.post('/', (req, res) => {   
    const dog = req.body
    db.addDog(dog)
        .then(id => {
            res.json({ id: id[0] })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({})
        })

})


module.exports = router 