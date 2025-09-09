import "./index.scss";

import { DndContext } from "@dnd-kit/core";
import type { ITaskProps } from "./task-container/task";
import TaskContainer from "./task-container";

export interface IKanbanProps {
  backlogTasks?: ITaskProps[];
  todoTasks?: ITaskProps[];
  inProgressTasks?: ITaskProps[];
  doneTasks?: ITaskProps[];
  cancelledTasks?: ITaskProps[];
}
const Kanban = ({
  backlogTasks = [],
  todoTasks = [],
  inProgressTasks = [],
  doneTasks = [],
  cancelledTasks = [],
}: IKanbanProps) => {
  const totalTasks =
    backlogTasks.length +
    todoTasks.length +
    inProgressTasks.length +
    doneTasks.length +
    cancelledTasks.length;
  return (
    <DndContext>
      <section className="kanban">
        <TaskContainer
          title="Backlog"
          tasks={backlogTasks}
          inStatusTasks={backlogTasks.length}
          totalTasks={totalTasks}
        />
        <TaskContainer
          title="Todo"
          tasks={todoTasks}
          inStatusTasks={todoTasks.length}
          totalTasks={totalTasks}
        />
        <TaskContainer
          title="In Progress"
          tasks={inProgressTasks}
          inStatusTasks={inProgressTasks.length}
          totalTasks={totalTasks}
        />
        <TaskContainer
          title="Done"
          tasks={doneTasks}
          inStatusTasks={doneTasks.length}
          totalTasks={totalTasks}
        />
        <TaskContainer
          title="Cancelled"
          tasks={cancelledTasks}
          inStatusTasks={cancelledTasks.length}
          totalTasks={totalTasks}
        />
      </section>
    </DndContext>
  );
};

export default Kanban;
