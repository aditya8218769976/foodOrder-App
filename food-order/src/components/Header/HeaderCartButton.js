import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "../Header/HeaderCartButton.css";
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className="buttonStyle" onClick={props.onClick}>
      <span className="icon-style">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge-style">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
