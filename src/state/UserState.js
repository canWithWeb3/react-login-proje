import React, {useReducer} from 'react'
import UserReducer from "../reducers/UserReducer"
import UserContext from "../context/UserContext"

const UserState = (props) => {
  const initialState = {
    logged: false,
    loggedUsername: null,
    users: []
  }

  const [state,dispatch] = useReducer(UserReducer,initialState);

  const register = (username,email,password) => {
    const user = {
      username: username,
      email: email,
      password: password
    }
    dispatch({
      type: "LOGGED",
      loggedUsername: username
    })
    localStorage.setItem("logged",true)
    localStorage.setItem("loggedUsername",JSON.stringify(username));
    const users = [];
    const usersLS = JSON.parse(localStorage.getItem("users"));
    if(usersLS){
      usersLS.map((user) => {
        users.push(user);
      })
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    })
    localStorage.removeItem("logged");
    localStorage.removeItem("loggedUsername");
  }

  return (
    <UserContext.Provider value={{
      logged: state.logged,
      loggedUsername: state.loggedUsername,
      users: state.users,
      register,
      logout,
      dispatch,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState