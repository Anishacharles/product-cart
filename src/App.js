import './App.css';
import { useState } from "react";
import CartModal from "./components/CartModal";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";


function App() {

  const [cartItem, setcartItem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //add to cart
  const addToCart = (product) => {
    setcartItem([...cartItem, product])
  }

  //remove from Cart

  const removeFromCart = (id) => {
    setcartItem(cartItem.filter((item) => item.id !== id))
  }

  //To open the cart
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="App">
      <Navbar cartCount={cartItem.length} openCart={openCart} />
      <ProductList addToCart={addToCart} cartItem={cartItem}
        />


      {isCartOpen &&

        <CartModal cartItem={cartItem} removeFromCart={removeFromCart} closeCart={closeCart}  />}
    </div>
  );
}
export default App;