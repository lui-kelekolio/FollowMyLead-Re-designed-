const express = require('express')

const dogData = require('../db/dogData')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    dogData.getDog()
        .then(dog =>{
            console.log(dog)

            return res.json(dog)

        }) 
})

module.exports = router 