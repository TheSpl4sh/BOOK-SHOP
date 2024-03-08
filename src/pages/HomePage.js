import React from 'react'
import Shop from '../components/Shop';
import { useState } from 'react';
import { MyContext } from '../MyContext'

function HomePage() {
  const [isCardView, setIsCardView] = useState(true)

  const toggleView = () => {
    setIsCardView(!isCardView);
  }

  return (
    <>
      <button className='shop-button' onClick={toggleView}>Change direction</button>
        
      <MyContext.Provider value={{ isCardView }}>
        <Shop/>
      </MyContext.Provider>
    </>
  );
}

export {HomePage}