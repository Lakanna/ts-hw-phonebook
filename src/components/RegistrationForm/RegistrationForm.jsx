import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

export const RegistrationForm = () => {
  const initialValues = { name: "", email: "", password: "" };
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleRegister = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          autoComplete="off"
          className={css.input}
        />
        <ErrorMessage className={css.errorText} name="name" component="p" />

        <label htmlFor={emailFieldId} className={css.label}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={emailFieldId}
          autoComplete="off"
          className={css.input}
        />
        <ErrorMessage className={css.errorText} name="email" component="p" />

        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordFieldId}
          className={css.input}
          placeholder="Min 7 characters"
        />
        <ErrorMessage className={css.errorText} name="password" component="p" />
        <button type="submit" className={css.submitButton}>
          Registration
        </button>
      </Form>
    </Formik>
  );
};
