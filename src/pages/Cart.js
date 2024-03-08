import CardsDelete from "../components/CardsDelete";
import CheckoutForm from "../components/CheckoutForm";
import '../style/cart.scss'
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  const favorites = useSelector(state => state.favorites.favorites)

  return (
    <section className="cart-container">
      <article className="cart-container__product-list">
          {cart.map((item) => (
            <CardsDelete item={item} key={item.id} 
            boolean={favorites.some((el) => {return el.id === item.id})}/>
          ))}
      </article>

      <article className="cart-container__purchase-form">
            <CheckoutForm />
      </article>
    </section>
  );
};

export {Cart};
