import Button from "../UI/Button.jsx";
import logoImage from "../../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../../store/CartContext.jsx";
import UserProgressContext from "../../store/UserProgressContex.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartitems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="A restaurant" />
        <h1>Fooder</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartitems})
        </Button>
      </nav>
    </header>
  );
}
