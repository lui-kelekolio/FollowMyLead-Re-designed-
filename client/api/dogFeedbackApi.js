import request from 'superagent'


const apiDogFeedbackUrl = '/api/feedback/dogs'
export function getDogFeedback(id) {
    return request
        .get(apiDogFeedbackUrl + id + '/feedback')
        .then(res => res.body)
}