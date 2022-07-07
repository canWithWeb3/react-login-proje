import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-white mb-0'>
      <div className="container py-3 d-flex justify-content-between">
        <div className='fs-3'>Bütün Haklarımız Saklıdır... &copy; | 2022</div>
        <div className="socials">
          <i className="fab fa-facebook-square fa-2x ms-3"></i>
          <i className="fab fa-twitter-square fa-2x ms-3"></i>
          <i className="fab fa-youtube fa-2x ms-3"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
