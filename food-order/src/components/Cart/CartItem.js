import "../Cart/CartItem.css";

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  return (
    <li className="cart-item-style">
      <div>
        <h2>{props.name}</h2>
        <div className="summary-style">
          <span className="price-style">{price}</span>
          <span className="amount-style">{props.amount}</span>
        </div>
      </div>
      <div className="action-style">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
