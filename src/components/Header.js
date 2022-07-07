import React, {useEffect,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from "../context/UserContext"

const Header = () => {
  const {dispatch,logout,logged,loggedUsername} = useContext(UserContext)

  useEffect(() => {
    const loggedLS = JSON.parse(localStorage.getItem("logged"));
    const loggedUsernameLS = JSON.parse(localStorage.getItem("loggedUsername"));
    if(loggedLS){
      dispatch({
        type: "LOGGED",
        loggedUsername: loggedUsernameLS
      })
    }
  }, [])

  const Logout = () => {
    logout()
  }

  return (
    <header className='mb-5'>
      <div className="mb-0 alert alert-warning text-center">
        <a href="https://github.com/canweb3/react-login-proje" target="_plank">Github'a gitmek için tıklayınız.</a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex align-items-center">
          <h3 className='mb-0'><NavLink className="navbar-brand d-inline-block" to="/">Paylaştıkça | <span>Bilgi Paylaştıkça Çoğalır...</span></NavLink></h3>
          {
            logged ? (
              <div className="float-right mt-md-0 mt-3 mx-md-0 mx-auto">
                <button className="btn btn-light me-3">{loggedUsername}</button>
                <button onClick={Logout} className="btn btn-warning">Çıkış Yap</button>
              </div>
            ):(
              <div className="float-right mt-md-0 mt-3 mx-md-0 mx-auto">
                <NavLink to="/giris-yap" className="btn btn-light me-3">Giriş Yap</NavLink>
                <NavLink to="/kayit-ol" className="btn btn-warning">Kayıt Ol</NavLink>
              </div>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header
