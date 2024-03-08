import React from 'react'
import '../style/button-component.scss'

function Button({ text, onClick, backgroundColor}) {
  const buttonBackground = {
    backgroundColor: backgroundColor, 
  }

  return (
    <div className="button-container">
      <button className='button_item' onClick={onClick} style={buttonBackground}>{text}</button>
    </div>
  )
}

export default Button