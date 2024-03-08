import Navbar  from "./Navbar";
import React from 'react'
import { useEffect, /* useState */ } from 'react';
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const Layout = () => {
  const cart = useSelector(state => state.cart.cart)
  const favorites = useSelector(state => state.favorites.favorites)

  /* FAVOURITES */

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  /* CART */

   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const cartSize = (cart) => {
    const mapingCart = cart.map((item) => {
      return item.count
    })

    if (mapingCart.length > 0) {
      const totalAmount = mapingCart.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
      })
      return totalAmount
    } else {
      return 0
    }
  } 
  
  return (
    <>
    <header>
        <Navbar cartSize={cartSize(cart)} favouritesSize={favorites.length}/>
    </header>

    <Outlet />
    </>

  )
}

export  {Layout}