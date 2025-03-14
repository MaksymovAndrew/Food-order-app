import Button from "./UI/Button.jsx";
import logoImage from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="A restaurant" />
        <h1>Fooder</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
