import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Modal from './Modal';
import '../style/cards-table.scss'
import { useDispatch } from 'react-redux';
import { handleClick } from '../features/cartSlice';
import { toggleFavorite } from '../features/favoriteSlice';

const CardsTable = ({item, boolean}) => {
    const {name, image_link, price} = item
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch();

    const dispatchedHandleClick = (item) => {
        dispatch(handleClick(item));
    }

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
          <Button text="Ok" className='modal-buttons__item' onClick={() => {dispatchedHandleClick(item); toggleFirst()}}/>
          <Button text="Cancel" className='modal-buttons__item' onClick={toggleFirst} />
        </>
    )

  return (
    <div className="cards-table">
            <img src={image_link} alt="img" className='cards-table__img'/>

            <p className='cards-table__name'>{name}</p>
            <p>Price - {price}</p>
            <Button text="Add to cart" backgroundColor="#66849a" onClick={toggleFirst} />
            <button className='details__button' style={starBackground} onClick={() => {dispatchedToggleFavorite(item)}}></button>

            {
              isModalOpen &&
              <Modal 
                onClose={toggleFirst} 
                header="Do you want to add this book to cart ?" 
                text="You can see number of orders in header"
                actions={modalActions}
              />
            }
    </div>
  )
}

export default CardsTable