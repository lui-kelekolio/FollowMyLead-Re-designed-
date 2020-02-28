import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const URL = '/api/walker/'

export function addWalker(walker) {
  return request.post(URL)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .set({ 'Content-Type': 'application/json' })
    .send(walker)
    .then(res => {
      console.log(res.body)
    })
}

export function getWalkers(URL) {
  return request.get(URL)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .set({ 'Accept': 'application/json' })
    .then(res => {
      console.log(res.body + " this is the res.body")
      console.log(res.body.walker + " this is the res.body after the res.body")
      return res.body.walker
    })
    .catch(logError)
}

export function getUserDetails(id) {
  return request.get('/api/user/' + id)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .set({ 'Content-Type': 'application/json' })
    .then(res => {
      return res.body
    })
}

export function getWalker(walkerId) {
  return request.get(URL + walkerId)
    .then(res => res.body)
}
