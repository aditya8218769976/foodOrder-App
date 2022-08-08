import "./MealsItemForm.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsVAlid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountInNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountInNumber < 1 ||
      enteredAmountInNumber > 5
    ) {
      setAmountIsVAlid(false);

      return;
    }
    props.onAddToCart(enteredAmountInNumber);
  };
  return (
    <form className="form-style" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5). </p>}
    </form>
  );
};

export default MealsItemForm;
