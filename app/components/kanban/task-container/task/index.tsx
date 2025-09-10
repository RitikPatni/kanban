import "./index.scss";

import { CSS } from "@dnd-kit/utilities";
import type { ITask } from "~/types";
import priorityMedIcon from "~/assets/icons/priority-med.svg";
import { useDraggable } from "@dnd-kit/core";
import userGrayIcon from "~/assets/icons/user-gray.svg";

const Task = ({
  title,
  description,
  priority,
  assignee,
  id,
  status,
  labels,
}: ITask) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type: "task",
      task: { id, title, description, priority, assignee, status, labels },
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      className="task"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="task__info">
        <div className="task__info__left">
          <div className="task__info__left__title">{id}</div>
          <div className="task__info__left__description">{title}</div>
        </div>
        <img
          src={userGrayIcon}
          alt="User"
          className="task__info__right"
          title={`Assignee: ${assignee}`}
        />
      </div>
      <img
        src={priorityMedIcon}
        alt="Priority"
        className="task__priority-icon"
        title={`Priority: ${priority}`}
      />
    </div>
  );
};
export default Task;
