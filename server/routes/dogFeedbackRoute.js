const express = require('express')
const db = require('../db/dogFeedbackData')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFeedback()
    .then(feedback => {
      console.log(feedback)
      return res.json(feedback)
    })
})

module.exports = router