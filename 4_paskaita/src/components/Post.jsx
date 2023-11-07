import PropTypes from "prop-types";
import "./Post.css";

const Post = (props) => {
  const { post, index } = props;
  return (
    <div className="post-card">
      <h3>
        {index + 1}. {post.title}
      </h3>
      <p>{post.body}</p>
      <a href="#">Read more...</a>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

export default Post;
