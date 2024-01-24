import React from 'react'
import logo from "../assets/checkmark.png"
import cart_icon from "../assets/checkmark.png"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo' >
          <img src={logo} alt="" />
          <p>Shopper</p>
        </div>
        <ul className="nav-menu">
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login </button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}
