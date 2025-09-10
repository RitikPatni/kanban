import "./index.scss";

import { CSS } from "@dnd-kit/utilities";
import type { ITask } from "~/types";
import priorityMedIcon from "~/assets/icons/priority-med.svg";
import { useDraggable } from "@dnd-kit/core";
import userGrayIcon from "~/assets/icons/user-gray.svg";

const Task = ({ title, description, priority, assignee }: ITask) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
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
          <div className="task__info__left__title">{title}</div>
          <div className="task__info__left__description">{description}</div>
        </div>
        <img src={userGrayIcon} alt="User" className="task__info__right" />
      </div>
      <img
        src={priorityMedIcon}
        alt="Priority"
        className="task__priority-icon"
      />
    </div>
  );
};
export default Task;
