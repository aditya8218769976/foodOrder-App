import "./Card.css";

const Card = (props) => {
  return <div className="card-style">{props.children}</div>;
};

export default Card;
