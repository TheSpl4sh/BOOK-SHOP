import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { Layout } from './components/Layout';
import { Cart } from './pages/Cart';
import { Notfoundpage } from './pages/NotFound';
import { Favourites } from './pages/Favourites';
import { useEffect } from 'react';
import { loadProducts } from './features/productSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<HomePage/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="favourites" element={<Favourites/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
