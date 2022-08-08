import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className="input-style">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
