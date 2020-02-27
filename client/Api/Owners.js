import request from 'superagent'

const apiOwnerUrl = '/api/v1/owner'


export function addOwner(owner) {
    return request.post(apiOwnerUrl)
      .send(owner)
      .then(res => {
          return res.body
      })
}



