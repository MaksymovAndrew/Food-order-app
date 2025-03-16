import Button from "./UI/Button.jsx";
import logoImage from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartitems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0)
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="A restaurant" />
        <h1>Fooder</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartitems})</Button>
      </nav>
    </header>
  );
}
