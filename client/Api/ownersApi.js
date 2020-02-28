import request from 'superagent'

const apiOwnerUrl = '/api/owner/'

export function getOwner(id) {
    return request
    .get(apiOwnerUrl + id)
    .then(response => response.body)

}



export function addOwner(owner) {
    return request.post(apiOwnerUrl)
      .send(owner)
      .then(res => {
          return res.body
      })
}



