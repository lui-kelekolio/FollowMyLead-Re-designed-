const express = require('express')

const walkerData = require('../db/walkerData')

const router = express.Router()

router.use(express.json())

router.get('/:id', (req, res) => {
    walkerData.getWalker()
        .then(walker =>{
            console.log(walker)

            return res.json(walker)

        }) 
})

module.exports = router 