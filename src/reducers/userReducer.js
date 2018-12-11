export default function userReducer(state = '', action) {
  switch (action.type) {
    case 'updateUser':
      return action.payload
    default:
      return state
  }
}