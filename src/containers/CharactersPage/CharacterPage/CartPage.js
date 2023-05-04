import React from "react";
import { cartItems, handleQuantityChange } from "./CharacterPage";
// import appRoutes from '../../shared/appRoutes';

export function CartPage({ cartItems, handleQuantityChange }) {
  console.log(cartItems)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
  return (
    <div>
      <h1>My Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />

          <div>
            <h2>{item.name}</h2>
            <p>Size: {item.size}</p>
            <p>Color: {item.color}</p>
            <p>Price: {item.price}</p>
            <input
              type="number"
              min="1"
              max="10"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
          </div>

        </div>
      ))}
      <h2>Total Price: {totalPrice}</h2>
      <button>Checkout</button>
    </div>
  );
}





