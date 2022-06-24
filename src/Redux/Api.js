import axios from "axios"

export const getUsers=()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
}


export const getOneUser=(a)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${a}`)
}