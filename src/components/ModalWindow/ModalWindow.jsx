import Modal from "react-modal";
import css from "./ModalWindow.module.css";
import DeleteContactWindow from "../DeleteContactWindow/DeleteContactWindow";
import ContactForm from "../ContactForm/ContactForm";

Modal.setAppElement("#root");

export default function ModalWindow({
  onCloseModal,
  modalIsOpen,
  contact,
  editContactModal,
  deleteContactModal,
}) {
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
}
