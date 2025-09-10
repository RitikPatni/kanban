import "./index.scss";

import CreateTaskHeader from "./header";
import backlogIcon from "~/assets/icons/backlog.svg";
import labelIcon from "~/assets/icons/label.svg";
import priorityHiIcon from "~/assets/icons/priority-hi.svg";
import userIcon from "~/assets/icons/user.svg";

const CreateTask = () => {
  return (
    <div className="create-task">
      <div className="create-task__content">
        <CreateTaskHeader />
        <form action="" className="create-task__form">
          <input
            type="text"
            name="title"
            id="title"
            className="create-task__form__input"
          />
          <textarea
            name="description"
            id="description"
            className="create-task__form__textarea"
            placeholder="Description..."
            rows={4}
          ></textarea>
        </form>
        <div className="create-task__tags">
          <button className="create-task__tags__button" type="button">
            <img src={backlogIcon} alt="Backlog" />
            <span>Backlog</span>
          </button>
          <button className="create-task__tags__button" type="button">
            <img src={priorityHiIcon} alt="Priority" />
            <span>Priority</span>
          </button>
          <button className="create-task__tags__button" type="button">
            <img src={userIcon} alt="Assignee" />
            <span>Assignee</span>
          </button>
          <button className="create-task__tags__button" type="button">
            <img src={labelIcon} alt="Label" />
            <span>Label</span>
          </button>
        </div>
        <div className="create-task__submit">
          <button className="create-task__submit__button">Create issue</button>
        </div>
      </div>
    </div>
  );
};
export default CreateTask;
