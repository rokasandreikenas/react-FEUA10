import PropTypes from "prop-types";
import "./UserCard.css";

const UserCard = (props) => {
  const { user } = props;
  const { name, username } = user;

  return (
    <div className="user-card">
      <p>
        {name} - {username}
      </p>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default UserCard;
