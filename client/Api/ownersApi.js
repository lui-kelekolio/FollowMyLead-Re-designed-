import request from 'superagent'

const apiOwnerUrl = '/api/owner'


export function addOwner(owner) {
    return request.post(apiOwnerUrl)
      .send(owner)
      .then(res => {
          return res.body
      })
}



