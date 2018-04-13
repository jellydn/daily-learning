import axios from 'axios'

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users'

export function getUsers () {
  return axios.get(USER_API_URL)
}
