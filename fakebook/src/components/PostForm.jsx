import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import Button from "../components/Button";
import PropTypes from "prop-types";
import styles from "./PostForm.module.scss";

const postSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  text: Yup.string().required("Required"),
  imageUrl: Yup.string().url("Url should be valid").required("Required"),
});

const PostForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ title: "", text: "", imageUrl: "" }}
      onSubmit={handleSubmit}
      validationSchema={postSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <FormField label="Title" name="title" placeholder="Title" />
          </div>
          <div className={styles.field}>
            <FormField label="Post text" name="text" placeholder="Post text" />
          </div>
          <div className={styles.field}>
            <FormField
              label="Image url"
              name="imageUrl"
              type="url"
              placeholder="Image url"
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Post
          </Button>
        </Form>
      )}
    </Formik>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default PostForm;
