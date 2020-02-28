const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const { createUser } = require('../db/userData')
const { userExists, getUserByName} = require('../db/walkerData')

const router = express.Router()

// TODO: create POST routes for /auth/signin and /auth/register

// db functions that need to use auth. Subject to change.
applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

module.exports = router
