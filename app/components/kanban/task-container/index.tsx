import "./index.scss";

import Header, { type Title } from "./header";
import Task, { type ITaskProps } from "./task";
import { useDroppable } from "@dnd-kit/core";

export interface ITaskContainerProps {
  title: Title;
  inStatusTasks?: number;
  tasks?: ITaskProps[];
  totalTasks?: number;
}
const TaskContainer = ({
  title,
  inStatusTasks,
  tasks,
  totalTasks,
}: ITaskContainerProps) => {
  const { setNodeRef: setDroppableRef } = useDroppable({
    id: `droppable-${title}`,
  });
  return (
    <div className="task-container">
      <Header
        title={title}
        inStatusTasks={inStatusTasks}
        totalTasks={totalTasks}
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
