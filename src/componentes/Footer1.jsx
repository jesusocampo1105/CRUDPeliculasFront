import React from 'react'
import Logo from "../assets/Logo.png"

export const Footer1 = () => {
  return (
    <div>
            <footer className="footer-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <p className="copyright">Copyright - 2023. All Rights Reserved</p>
    </footer>
    </div>
  )
}