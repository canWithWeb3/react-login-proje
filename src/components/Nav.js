import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="list-group mb-3">
      <NavLink  to="/" className="list-group-item list-group-item-action"><i className="fas fa-home"></i> Anasayfa</NavLink>
      <NavLink  to="/hakkimizda" className="list-group-item list-group-item-action"><i className="fas fa-users"></i> Hakkımızda</NavLink>
      <NavLink  to="/referanslar" className="list-group-item list-group-item-action"><i className="fas fa-asterisk"></i> Referanslar</NavLink>
      <NavLink  to="/iletisim" className="list-group-item list-group-item-action"><i className="fas fa-address-book"></i> İletişim</NavLink>
    </div>
  )
}

export default Nav