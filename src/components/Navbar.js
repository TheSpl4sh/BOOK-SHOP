import { NavLink } from "react-router-dom";
import React from 'react'
import cart from './cart-shopping-solid.svg'
import star from './star.svg'
import '../style/navbar.scss'

const Navbar = ({cartSize, favouritesSize}) => {
  return (
    <nav className='nav'>
        <div className='nav-box'>
            <div className='nav_home-container'>
              <NavLink to="/">
                Home
              </NavLink>
            </div>

            <div className='nav_cart-container'>
              <NavLink
              to="/cart"
              className='nav_cart-title'>
                My Shopping
              </NavLink>

              <span>
                <img src={cart} alt="cart"/>
                {cartSize}
              </span>
            </div>

            <div className='nav_favourites-container'>
              <NavLink to="/favourites">
                  My Favourites
              </NavLink>

              <span>
                <img src={star} alt='star' className='nav_star-img'></img>
                {favouritesSize}
              </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar