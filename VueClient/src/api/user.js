import axios from 'axios'

const base = ''

export const getUserList = params => { console.log("----"); return axios.get("http://localhost:3000/login") }

//export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }) }