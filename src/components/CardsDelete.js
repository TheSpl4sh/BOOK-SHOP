import { useState } from 'react'
import React from 'react'
import Button from './Button'
import Modal from './Modal';
import '../style/cards.scss'
import { useDispatch } from 'react-redux';
import { handleDelete } from '../features/cartSlice';
import { toggleFavorite } from '../features/favoriteSlice';

const CardsDelete = ({item, boolean}) => {
  const {name, image_link, price, id} = item
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch();

  const dispatchedHandleDelete = (itemId) => {
    dispatch(handleDelete(itemId));
  };

  const dispatchedToggleFavorite = (item) => {
    dispatch(toggleFavorite(item))
  }

  const starBackground = boolean 
  ?{backgroundColor: "#66849a"}
  :{backgroundColor: "white"}

  const toggleFirst = () => {
    setIsModalOpen(!isModalOpen);
  }

  const modalActions = (
    <>
      <Button text="Ok" className='modal-buttons__item' onClick={() => {dispatchedHandleDelete(id); toggleFirst()}}/>
      <Button text="Cancel" className='modal-buttons__item' onClick={toggleFirst} />
    </>
  )

  return (
    <div className="cards">
        <div className="image_box">
            <img src={image_link} alt="img" className='image_item'/>
        </div>

        <div className="details">
            <p>{name}</p>
            <p>Price - {price}</p>
              <span>Count: {item.count}</span>
            <Button text="Delete" backgroundColor="#66849a" onClick={toggleFirst} />
            <button className='details__button' style={starBackground} onClick={() => {dispatchedToggleFavorite(item)}}></button>

            {
              isModalOpen &&
              <Modal 
                onClose={toggleFirst} 
                header="Do you want to delete this book from the cart ?" 
                text="You can see number of orders in header"
                actions={modalActions}
              />
            }
        </div>
    </div>
  )
}

export default CardsDelete