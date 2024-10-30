
import "./Card.scss";

const Card = ({ task, empty }) => {
  return <div className={`card ` + (empty ? "card--empty" : "")}>{task}</div>;
};

export default Card;
