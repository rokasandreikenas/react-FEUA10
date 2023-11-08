import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { product, handleDelete } = props;
  const { id, title, image, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p className="price">{price}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  handleDelete: PropTypes.func.isRequired,
};

export default ProductCard;
