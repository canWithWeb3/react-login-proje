const LoginReducer = (state, action) => {
  switch(action.type){
    case "POPULATE_USERS":
      return action.users

    case "LOGGED":
      return {
        ...state,
        logged: true,
        loggedUsername: action.loggedUsername
      }
    case "LOGOUT":
      return {
        ...state,
        logged: false,
        loggedUsername: null
      }
    

    default:
      return state
  }
}

export default LoginReducer
