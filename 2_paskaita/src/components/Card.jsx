/* eslint-disable react/prop-types */
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.imageUrl} alt={props.description} />
      </div>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Card;
