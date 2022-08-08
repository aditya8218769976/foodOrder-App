import { useRef, useState } from "react";
import "../Cart/CheckOut.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const CheckOut = (props) => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const streetName = streetInputRef.current.value;
    const cityName = cityInputRef.current.value;
    const postalName = postalInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetNameIsValid = !isEmpty(streetName);
    const enteredCityNameIsValid = !isEmpty(cityName);
    const enteredPostalNameIsValid = !isFiveChars(postalName);

    setFormInputIsValid({
      name: enteredNameIsValid,
      street: enteredStreetNameIsValid,
      city: enteredCityNameIsValid,
      postalCode: enteredPostalNameIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetNameIsValid &&
      enteredCityNameIsValid &&
      enteredPostalNameIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: streetName,
      city: cityName,
      postalCode: postalName,
    });
  };

  return (
    <form className="form-control" onSubmit={confirmHandler}>
      <div className="name-style">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      {formInputIsValid.name && <p className="error-text">Enter Your Name.</p>}
      <div className="name-style">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      {formInputIsValid.city && (
        <p className="error-text">Enter Your Street Name.</p>
      )}
      <div className="name-style">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>
      {formInputIsValid.postalCode && (
        <p className="error-text">Postal address should contain 5 chars.</p>
      )}
      <div className="name-style">
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      {formInputIsValid.city && <p className="error-text">Enter Your City.</p>}
      <div className="form-actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="action-submit">Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
