import axios from 'axios'

export const GetAll = () => {
    return axios
    .get('/user',{
        headers:{'Content-Type':'application/json'}
    })
    .then(res => {
        return res.data
    })
}

export const AddUser = term => {
    return axios
    .post(
        '/user',{
            user_name:term
        },
        {
            headers:{'Content-Type':'application/json'}
        }
    ).then(function(response)
    {
        console.log(response)
    })
}