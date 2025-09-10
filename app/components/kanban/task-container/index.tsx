import "./index.scss";

import type { ITask, TaskStatus } from "~/types";

import Header from "./header";
import Task from "./task";
import { useDroppable } from "@dnd-kit/core";

export interface ITaskContainerProps {
  status: TaskStatus;
  inStatusTasks?: number;
  tasks?: ITask[];
  totalTasks?: number;
  onAddTask: (task: TaskStatus) => void;
}
const TaskContainer = ({
  status,
  inStatusTasks,
  tasks,
  totalTasks,
  onAddTask,
}: ITaskContainerProps) => {
  const { setNodeRef: setDroppableRef } = useDroppable({
    id: status,
  });
  return (
    <div className="task-container">
      <Header
        status={status}
        inStatusTasks={inStatusTasks}
        totalTasks={totalTasks}
        onAddTask={onAddTask}
      />
      <div className="task-container__tasks" ref={setDroppableRef}>
        {tasks?.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
