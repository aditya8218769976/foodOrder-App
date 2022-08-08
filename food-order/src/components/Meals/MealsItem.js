import { useContext } from "react";
import "./MealsItem.css";
import MealsItemForm from "./MealsItemForm";
import CardContext from "../../Store/CartContext";

const MealsItem = (props) => {
  const cartCtx = useContext(CardContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meals-li-style">
      <div>
        <h3>{props.name}</h3>
        <div className="meals-description-style">{props.description}</div>
        <div className="meals-price-style">{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
