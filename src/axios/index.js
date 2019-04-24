import axios from 'axios'

const request = axios.create({
   // baseURL: '/api/v1/',
   baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
})

export default request
