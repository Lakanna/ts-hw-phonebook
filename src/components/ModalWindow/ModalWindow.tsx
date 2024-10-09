import Modal from "react-modal";
import css from "./ModalWindow.module.css";
import DeleteContactWindow from "../DeleteContactWindow/DeleteContactWindow";
import ContactForm from "../ContactForm/ContactForm";
import { IContact } from "../../types";

Modal.setAppElement("#root");

interface ModalWindowProps {
  onCloseModal: () => void;
  modalIsOpen: boolean;
  contact: IContact;
  editContactModal: boolean;
  deleteContactModal: boolean;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  onCloseModal,
  modalIsOpen,
  contact,
  editContactModal,
  deleteContactModal,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        {deleteContactModal && (
          <DeleteContactWindow contact={contact} onCloseModal={onCloseModal} />
        )}
        {editContactModal && (
          <ContactForm currentContact={contact} onCloseModal={onCloseModal} />
        )}
      </Modal>
    </>
  );
};

export default ModalWindow;
