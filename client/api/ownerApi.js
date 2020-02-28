import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const URL = '/api/owner/'

export function addOwner(owner) {
    return request.post(URL)
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .set({ 'Content-Type': 'application/json' })
        .send(owner)
        .then(res => {
            console.log(res.body)
        })
}

export function getOwner(id) {
    return request
    .get(URL + id)
    .then(response => response.body)
}
