const { generateHash } = require('authenticare/server')

function generatePasswordHash (password) {
    return generateHash(password)
}

function comparePasswordToHash (password, hash) {

    
}

module.exports = {
    generatePasswordHash,
    comparePasswordToHash
}