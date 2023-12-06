import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { PATHS } from "../routes/consts";
import { createUser } from "../api/users";
import styles from "./Login.module.scss";

const registerSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await createUser(values);
      navigate(PATHS.Home);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.field}>
                <FormField
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className={styles.field}>
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className={styles.field}>
                <FormField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className={styles.field}>
                <FormField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Register
              </Button>
              <div className={styles.link}>
                Already have an account?{" "}
                <Link to={PATHS.Home}>Back to login</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Register;
