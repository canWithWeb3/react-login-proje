import React, { useContext, useState, useEffect } from 'react'
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router-dom"

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [registerErr, setRegisterErr] = useState("");

  const navigate = useNavigate()
  const {register} = useContext(UserContext)


  useEffect(() => {
    const loggedLS = JSON.parse(localStorage.getItem("logged"));
    const loggedUsernameLS = JSON.parse(localStorage.getItem("loggedUsername"));
    if(loggedLS || loggedUsernameLS){
      navigate("/")
    }
  }, [])
  
  const checkForm = () => {
    let checked = false;
    if(username.trim()!="" && email.trim()!="" && password.trim()!=""){
      if(password == repassword){
        checked = true;
      }else{
        setRegisterErr("Parolalar eşleşmiyor");
      }
    }else{
      setRegisterErr("Alanlar boş bırakılamaz");
    }
    
    return checked;
  }

  const checkLS = () => {
    const usersLS = JSON.parse(localStorage.getItem("users"));
    let checkLS = true;
    if(usersLS){
      usersLS.map((user) => {
        if(user.username != username){
          if(user.email != email){
            
          }else{
            checkLS = false;
            setRegisterErr("Email kullanılmaktadır.");
          }
        }else{
          checkLS = false;
          setRegisterErr("Kullanıcı adı kullanılmaktadır.");
        }
      })
    }
    return checkLS;      
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(checkForm()){
      if(checkLS()){
        register(username,email,password);
        navigate("/")
      }else{
        console.log("no");
      }
    }
  }

  return (
    <div className='row min-height'>
      <div className="col-xl-6 col-lg-8 col-12 mx-auto">
        <div className="card">
          <div className="card-header text-center"><h4 className='mb-0'>Kayıt Ol</h4></div>
          <div className="card-body">
            {registerErr && (
              <div className="alert alert-warning">
                {registerErr}
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Kullanıcı adı:</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Parola:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Parola (Tekrar):</label>
                <input value={repassword} onChange={(e) => setRepassword(e.target.value)} type="password" className="form-control" />
              </div>
              <button type='submit' className="btn btn-primary btn-block">Kayıt Ol</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
