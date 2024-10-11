import { Field, Form, Formik, FormikHelpers } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import css from "./LoginForm.module.css";

interface IFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const dispatch: AppDispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleLogin = (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleLogin}>
        <Form className={css.form}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            autoComplete="off"
            id={emailFieldId}
            className={css.input}
          />

          <label htmlFor={passwordFieldId} className={css.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
            className={css.input}
          />

          <button type="submit" className={css.submitButton}>
            Log In
          </button>
        </Form>
      </Formik>
      <p>Does&apos;t have an account yet?</p>
      <Link to={"/register"}>Registration</Link>
    </>
  );
};
