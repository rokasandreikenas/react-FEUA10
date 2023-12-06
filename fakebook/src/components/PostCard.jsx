import PropTypes from "prop-types";
import styles from "./PostCard.module.scss";
import Button from "./Button";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PostCard = ({ post, handleDeletePost }) => {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.postCard}>
      <img src={post.imageUrl} alt={post.title} className={styles.postImage} />
      <h2 className={styles.postTitle}>{post.title}</h2>
      <div className={styles.postFooter}>
        <p className={styles.postText}>{post.text}</p>
        {user && post.createdBy === user.email && (
          <Button onClick={handleDeletePost}>Delete</Button>
        )}
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
  }).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostCard;
