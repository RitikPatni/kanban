import "./index.scss";

import { getStatusIcon, getStatusTitle } from "~/utilities";

import CreateTaskHeader from "./header";
import type { TaskStatus } from "~/types";
import backlogIcon from "~/assets/icons/backlog.svg";
import labelIcon from "~/assets/icons/label.svg";
import priorityHiIcon from "~/assets/icons/priority-hi.svg";
import { useEffect } from "react";
import userIcon from "~/assets/icons/user.svg";

export interface ICreateTaskProps {
  status: TaskStatus;
  closeModal: () => void;
}
const CreateTask = ({ status, closeModal }: ICreateTaskProps) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  const statusIcon = getStatusIcon(status);
  const statusTitle = getStatusTitle(status);
  return (
    <div className="create-task">
      <div className="create-task__content">
        <CreateTaskHeader closeModal={closeModal} />
        <form action="" className="create-task__form">
          <input
            type="text"
            name="title"
            id="title"
            className="create-task__form__input"
            placeholder="Title"
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
            <img src={statusIcon} alt={statusTitle} />
            <span>{statusTitle}</span>
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
