import { useContext, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { UserContext } from "../context/UserContext";
import { fetchPosts, createPost, deletePost } from "../api/posts";
import styles from "./Home.module.scss";

const Home = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (values) => {
    try {
      const post = { ...values, createdBy: user.email };
      const response = await createPost(post);
      setPosts((prevPosts) => [...prevPosts, response]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      {isLoggedIn && <PostForm handleSubmit={handleSubmit} />}
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleDeletePost={() => handleDeletePost(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
