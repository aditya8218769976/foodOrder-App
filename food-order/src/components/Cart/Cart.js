import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState("");
  const [isDidSubmit, setIsDidSubmit] = useState("");
  const [orderMeals, setOrderMeals] = useState("");
  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setOrderMeals(true);
  };

  const submitConfirmHandler = async (userdata) => {
    setIsSubmitting(true);
    await fetch("https://form-29b35-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userdata,
        oderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setIsDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className="cart-items-style">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="actions-style">
      <button className="button-close-style" onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className="button-order-style" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalcontent = (
    <React.Fragment>
      {cartItems}
      <div className="total-style">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {orderMeals && (
        <CheckOut onConfirm={submitConfirmHandler} onCancel={props.onClose} />
      )}
      {!orderMeals && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending the data....</p>;

  const didSubmittedModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className="btn-bg-style">
        <button
          type="button"
          className="close-btn-style"
          onClick={props.onClose}
        >
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !isDidSubmit && cartModalcontent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && isDidSubmit && didSubmittedModalContent}
    </Modal>
  );
};

export default Cart;
