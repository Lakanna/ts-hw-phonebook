import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { IContact } from "../../types";
import { AppDispatch } from "../../redux/store";
import css from "./DeleteContactWindow.module.css";

interface DeleteContactWindowProps {
  onCloseModal: () => void;
  contact: IContact;
}

const DeleteContactWindow: React.FC<DeleteContactWindowProps> = ({
  onCloseModal,
  contact,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = (contact: IContact) => {
    dispatch(deleteContact(contact.id));
    onCloseModal();
  };

  const handleCancel = () => {
    onCloseModal();
  };

  return (
    <>
      <div className={css.describe}>
        <p>Do you really want to delete ${contact.name} contact?</p>
      </div>
      <div className={css.buttotsContainer}>
        <button
          type="button"
          className={css.button}
          onClick={() => handleDelete(contact)}
        >
          Delete contact
        </button>
        <button
          type="button"
          className={css.buttonReturn}
          onClick={handleCancel}
        >
          Cansel and return
        </button>
      </div>
    </>
  );
};

export default DeleteContactWindow;
