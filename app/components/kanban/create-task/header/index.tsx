import "./index.scss";

import crossIcon from "~/assets/icons/cross.svg";
import expandIcon from "~/assets/icons/expand.svg";

const CreateTaskHeader = () => {
  return (
    <header className="create-task-header">
      <h2 className="create-task-header__title">New Issue</h2>
      <div className="create-task-header__actions">
        <button
          className="create-task-header__actions__action"
          type="button"
          aria-label="Expand"
        >
          <img src={expandIcon} alt="Expand" />
        </button>
        <button
          className="create-task-header__actions__action"
          type="button"
          aria-label="Close"
        >
          <img src={crossIcon} alt="Close" />
        </button>
      </div>
    </header>
  );
};
export default CreateTaskHeader;
