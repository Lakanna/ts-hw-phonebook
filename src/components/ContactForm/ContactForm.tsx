import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";

import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ currentContact, onCloseModal }) {
  const dispatch = useDispatch();
  const fieldNameId = useId();
  const fieldNumberId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To short!")
      .max(50, "To long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{3}-\d{4}$/, "Must be XXX-XXX-XXXX")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    const newContact = { ...values };

    if (currentContact) {
      dispatch(editContact({ ...values, id: currentContact.id }));
      onCloseModal();
    } else {
      dispatch(addContact(newContact));
      currentContact = null;
      actions.resetForm();
    }
  }

  return (
    <Formik
      initialValues={currentContact ? currentContact : { name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formAddContact}>
        <label htmlFor={fieldNameId}>Name</label>
        <Field
          type="text"
          name="name"
          id={fieldNameId}
          autoComplete="off"
        ></Field>
        <ErrorMessage className={css.errorText} name="name" component="p" />

        <label htmlFor={fieldNumberId}>Number</label>
        <Field
          type="text"
          name="number"
          id={fieldNumberId}
          placeholder="XXX-XXX-XXXX"
          autoComplete="off"
        ></Field>
        <ErrorMessage className={css.errorText} name="number" component="p" />

        <button className={css.formaBtn} type="submit">
          {currentContact ? "Edit contact" : "Add contact"}
        </button>
      </Form>
    </Formik>
  );
}
