import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiDogUrl = '/api/dogs/'


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

export function addDog(dog) {
    console.log(dog)
    console.log("Youve gotten the dog")
    return request
    .post(apiDogUrl)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
        .send(dog)
        .then(res => 
            res.body
        )
}