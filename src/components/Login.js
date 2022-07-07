import React, { useState, useContext, useEffect } from 'react'
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState("");

  const navigate = useNavigate()
  const {dispatch} = useContext(UserContext);


  useEffect(() => {
    const loggedLS = JSON.parse(localStorage.getItem("logged"));
    const loggedUsernameLS = JSON.parse(localStorage.getItem("loggedUsername"));
    if(loggedLS || loggedUsernameLS){
      navigate("/")
    }
  }, [])

  const checkLoginForm = () => {
    if(username.trim()!=""){
      if(password.trim()!=""){
        return true;
      }else{
        setLoginErr("Parola boş bırakılamaz");
      }
    }else{
      setLoginErr("Kullanıcı adı boş bırakılamaz");
    }
  }

  const checkUsersLS = () => {
    const usersLS = JSON.parse(localStorage.getItem("users"));
    if(usersLS){
      let check = false;
      usersLS.map((user) => {
        if(user.username == username){
          if(user.password == password){
            check = true;
          }
        }
      });
      return check;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(checkLoginForm()){
      if(checkUsersLS()){
        dispatch({
          type: "LOGGED",
          loggedUsername: username
        })
        localStorage.setItem("logged", true)
        localStorage.setItem("loggedUsername", JSON.stringify(username))
        navigate("/");
      }else{
        setLoginErr("Kullanıcı adı veya parola hatalı")
      }
    }
  }

  return (
    <section className='min-height container row mx-auto'>
      <div className="col-xl-6 col-lg-8 col-12 mx-auto">
        <div className="card">
          <div className="card-header text-center"><h4 className='mb-0'>Giriş Yap</h4></div>
          <div className="card-body">
            {loginErr && (
              <div className="alert alert-warning">
                {loginErr}
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Kullanıcı adı:</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Parola:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
              </div>
              <button type='submit' className="btn btn-primary btn-block">Giriş Yap</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login