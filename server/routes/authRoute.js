const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const { userExists, getOwner, getWalker, createWalker } = require('../db/users')

const router = express.Router()

// TODO: create POST routes for /auth/signin and /auth/register

// db functions that need to use auth. Subject to change.
applyAuthRoutes(router, {
  userExists,
  getOwner,
  getWalker,
  createOwner,
  createWalker
})





module.exports = router
