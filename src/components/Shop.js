import React, { useContext } from 'react'
import Cards from './Cards'
import '../style/shop.scss'
import { useSelector } from 'react-redux'
import CardsTable from './CardsTable'
import { MyContext } from '../MyContext'

const Shop = () => {
  const product = useSelector(state => state.products.products)
  const favorites = useSelector(state => state.favorites.favorites)

  const {isCardView} = useContext(MyContext)

  return (
    <>
          {isCardView 
            ? (
              <section className="shop_container shop_container--cards">
                {product.map((item) => (
                      <Cards 
                        item={item} 
                        key={item.id} 
                        boolean={favorites.some((el) => {return el.id === item.id})} 
                      />
                  ))}
              </section>
            ) : (
              <section className="shop_container shop_container--table">
                {product.map((item) => (
                      <CardsTable 
                        item={item} 
                        key={item.id} 
                        boolean={favorites.some((el) => {return el.id === item.id})} 
                      />
                  ))}
              </section>
            )
          }
    </>
  )
}

export default Shop

