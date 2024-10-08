import { useDispatch, useSelector } from "react-redux";
import { DocumentTitle } from "../components/DocumentTitle";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
  const dispatch = useDispatch();
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
}
