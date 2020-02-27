import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const URL = '/api/walker'

export function addWalker(walker) {
    return request.post(URL)
        .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .set({ 'Content-Type': 'application/json' })
        .send(walker)
        .then(res => {
            console.log(res.body)
        })
}