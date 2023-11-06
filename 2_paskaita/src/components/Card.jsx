import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.imageUrl} alt={props.description} />
      </div>
      <p className="description">{props.description}</p>
      {props.price && <p>Renginio kaina: {props.price + props.price}$</p>}
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
};

export default Card;
