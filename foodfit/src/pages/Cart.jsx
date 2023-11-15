import { useState, useEffect } from "react";
import Button from "../components/Button";
import { fetchCart } from "../api";
import "./Cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCart()
      .then((response) => {
        setCartItems(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const subtotalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.mealKit.price,
    0
  );

  const shippingCost = 2;
  const sum = subtotalPrice + shippingCost;

  return (
    <form className="cart-form">
      <div className="header" />
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.mealKit.id}>
            <h3 className="title">{item.mealKit.title}</h3>
            <p>Kiekis {item.quantity}</p>
            <h3>${item.quantity * item.mealKit.price}</h3>
          </div>
        ))}
      </div>
      <div className="total">
        <h4 className="total-row">
          Tarpinė suma <span>${subtotalPrice}</span>
        </h4>
        <h4 className="total-row">
          Atvežimas <span>${shippingCost}</span>
        </h4>
        <h4 className="total-row">
          Galutinė suma <span>${sum}</span>
        </h4>
      </div>
      <div className="button-container">
        <Button style={{ width: "100%" }}>Užsakyti</Button>
      </div>
    </form>
  );
};

export default Cart;
