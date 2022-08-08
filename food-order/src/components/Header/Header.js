import { Fragment } from "react";
import "../Header/Header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header-style ">
        <h1>OrderMeals</h1>
        <HeaderCartButton onClick={props.onCartShow} />
      </header>
      <div className="img-row-style">
        <img className="img-style" src={mealsImage} alt="Delicious__Food" />
      </div>
    </Fragment>
  );
};

export default Header;
