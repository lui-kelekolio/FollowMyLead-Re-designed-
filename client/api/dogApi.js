import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiDogUrl = '/api/dogs/'
const dogFeedback = '/api/dogfeedback'


export function getDogs() {
    return request
        .get(apiDogUrl)
        .then(res => res.body)
}

export function getDog(id) {
    return request
        .get(apiDogUrl + id)
        .then(res => res.body)
}

export function getDogOwner() {
    return request
        .get(apiDogUrl)
        .then(res => res.body)
}

export function addDog(dog) {
    // console.log(dog)
    return request
    .post(apiDogUrl)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send(dog)
        .then(res => 
            res.body
        )
}

export function returnFeedback() {
    return request
    .get(dogFeedback)
    .then(res =>  res.body )
}