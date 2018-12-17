import axios from 'axios'

export const UPDATE_USER = 'users:updateUser'
export const SHOW_ERROR = 'users:showError '

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: 'ERROR'
  }
}

export function apiRequest() {
  return dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data)
        dispatch(updateUser(response.data[0].name))
      })
      .catch(error => {
        console.log(error)
        dispatch(showError)
      })
  }
}