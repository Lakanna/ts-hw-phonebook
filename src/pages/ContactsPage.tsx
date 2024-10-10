import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import DocumentTitle from "../components/DocumentTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>

      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Loading contacts...</p>}
      <ContactList />
    </>
  );
};

export default ContactsPage;
