import { useContext } from "react";
import { currencyFormatter } from "../../util/formatting.js";
import Modal from "../UI/Modal.jsx";
import CartContext from "../../store/CartContext.jsx";
import Button from "../UI/Button.jsx";
import UserProgressContext from "../../store/UserProgressContex.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const carttotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function hideCart() {
    userProgressCtx.hideCart();
  }
  console.log(cartCtx.items);

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncreace={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(carttotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        <Button onClick={hideCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
