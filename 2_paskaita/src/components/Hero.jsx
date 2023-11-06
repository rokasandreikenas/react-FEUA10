import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        padding: "2rem",
        color: "white",
        backgroundImage: `url("${props.imageUrl}")`,
        height: "50vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

Hero.propTypes = {
  color: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
