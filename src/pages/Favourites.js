import Cards from "../components/Cards";
import '../style/favorites.scss'
import { useSelector } from 'react-redux'

const Favourites = () => {
  const favorites = useSelector(state => state.favorites.favorites)

  return (
    <article className="favorites_container">
      {favorites.map((item) => (
        <Cards item={item} key={item.id} 
        boolean={favorites.some((el) => {return el.id === item.id})} 
        />
       
      ))}
    </article>
  )
}

export {Favourites}