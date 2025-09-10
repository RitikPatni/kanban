import "./index.scss";

import type { ITask, TaskStatus } from "~/types";
import { getStatusIcon, getStatusTitle } from "~/utilities";
import { useEffect, useState } from "react";

import CreateTaskHeader from "./header";
import labelIcon from "~/assets/icons/label.svg";
import priorityHiIcon from "~/assets/icons/priority-hi.svg";
import userIcon from "~/assets/icons/user.svg";

export interface ICreateTaskProps {
  status: TaskStatus;
  closeModal: () => void;
  onAddTaskSubmit: (task: ITask) => void;
}
const CreateTask = ({
  status,
  closeModal,
  onAddTaskSubmit,
}: ICreateTaskProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  const [formData, setFormData] = useState<ITask>({
    title: "",
    description: "",
    priority: "medium",
    status: status,
    assignee: "",
    id: Date.now().toString(),
    labels: [],
  });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTaskSubmit(formData);
  };
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <div className="create-task">
      <div
        className={`create-task__content ${fullScreen ? "create-task__content--fullscreen" : ""}`}
      >
        <CreateTaskHeader
          closeModal={closeModal}
          setFullScreen={setFullScreen}
        />
        <form
          className="create-task__form"
          name="create-task-form"
          id="create-task-form"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="title"
            id="title"
            className="create-task__form__input"
            placeholder="Title"
            required
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <textarea
            name="description"
            id="description"
            className="create-task__form__textarea"
            placeholder="Description..."
            rows={fullScreen ? 10 : 4}
            required
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </form>
        <div className="create-task__tags">
          <div className="create-task__tags__tag">
            <img src={statusIcon} alt={statusTitle} />
            <span className="create-task__tags__tag__label">{statusTitle}</span>
          </div>
          <button className="create-task__tags__tag" type="button">
            <img src={priorityHiIcon} alt="Priority" />
            <span className="create-task__tags__tag__label">Priority</span>
          </button>
          <button className="create-task__tags__tag" type="button">
            <img src={userIcon} alt="Assignee" />
            <span className="create-task__tags__tag__label">Assignee</span>
          </button>
          <button className="create-task__tags__tag" type="button">
            <img src={labelIcon} alt="Label" />
            <span className="create-task__tags__tag__label">Label</span>
          </button>
        </div>
        <div className="create-task__submit">
          <button
            className="create-task__submit__button"
            type="submit"
            form="create-task-form"
          >
            Create issue
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateTask;
