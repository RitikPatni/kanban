import "./index.scss";

import type { ITask, TaskStatus } from "~/types";
import { getStatusIcon, getStatusTitle } from "~/utilities";
import { useEffect, useState } from "react";

import Modal from "~/components/common/modal";
import { PRIORITIES } from "~/constants";
import TagsRow from "~/components/common/modal/tags-row";
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
  const [formData, setFormData] = useState<ITask>({
    title: "",
    description: "",
    priority: PRIORITIES.MEDIUM,
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
    <Modal
      closeModal={closeModal}
      title="Create Task"
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
    >
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
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
      <TagsRow
        status={formData.status}
        priority={formData.priority}
        assignee={formData.assignee}
        labels={formData.labels}
      />
      <div className="create-task__submit">
        <button
          className="create-task__submit__button"
          type="submit"
          form="create-task-form"
        >
          Create issue
        </button>
      </div>
    </Modal>
  );
};
export default CreateTask;
