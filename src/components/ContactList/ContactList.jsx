import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const selectByName = useSelector(selectFilteredContacts);
  // const selectByNumber = useSelector(selectFilteredContactsByNumber);

  const contacts = selectByName;
  // selectByName.length > selectByNumber.length ? selectByNumber : selectByName;

  return (
    <>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </>
  );
}

// lilu@net.com
