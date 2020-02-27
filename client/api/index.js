import request from 'superagent'


//Lui and Izzy code start
export function getDogs () {
    return request.get('/api/dogs')
    .then(res => {
        return res.body
    })
}


//Lui and Izzy code end