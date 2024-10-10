import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactList: React.FC = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </>
  );
};

// lilu@net.com
export default ContactList;
