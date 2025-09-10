import "./index.scss";

import crossIcon from "~/assets/icons/cross.svg";
import expandIcon from "~/assets/icons/expand.svg";

const ModalHeader = ({
  closeModal,
  setFullScreen,
  title,
}: {
  closeModal: () => void;
  setFullScreen: (value: boolean) => void;
  title: string;
}) => {
  return (
    <header className="modal-header">
      <h2 className="modal-header__title">{title}</h2>
      <div className="modal-header__actions">
        <button
          className="modal-header__actions__action"
          type="button"
          aria-label="Expand"
          onClick={() => setFullScreen(true)}
        >
          <img src={expandIcon} alt="Expand" />
        </button>
        <button
          className="modal-header__actions__action"
          type="button"
          aria-label="Close"
          onClick={closeModal}
        >
          <img src={crossIcon} alt="Close" />
        </button>
      </div>
    </header>
  );
};
export default ModalHeader;
