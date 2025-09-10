import "./index.scss";

import type { ITask, TaskStatus } from "~/types";

import CreateTask from "./create-task";
import { DndContext } from "@dnd-kit/core";
import TaskContainer from "./task-container";
import { useState } from "react";

const Kanban = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const backlogTasks: ITask[] = localStorage.getItem("backlogTasks")
    ? JSON.parse(localStorage.getItem("backlogTasks") || "")
    : [];
  const todoTasks: ITask[] = localStorage.getItem("todoTasks")
    ? JSON.parse(localStorage.getItem("todoTasks") || "")
    : [];
  const inProgressTasks: ITask[] = localStorage.getItem("inProgressTasks")
    ? JSON.parse(localStorage.getItem("inProgressTasks") || "")
    : [];
  const doneTasks: ITask[] = localStorage.getItem("doneTasks")
    ? JSON.parse(localStorage.getItem("doneTasks") || "")
    : [];
  const cancelledTasks: ITask[] = localStorage.getItem("cancelledTasks")
    ? JSON.parse(localStorage.getItem("cancelledTasks") || "")
    : [];

  const totalTasks =
    backlogTasks.length +
    todoTasks.length +
    inProgressTasks.length +
    doneTasks.length +
    cancelledTasks.length;

  const [showCreateTask, setShowCreateTask] = useState(false);
  const [createTaskStatus, setCreateTaskStatus] =
    useState<TaskStatus>("backlog");
  const onAddTask = (status: TaskStatus) => {
    setShowCreateTask(true);
    setCreateTaskStatus(status);
  };
  return (
    <DndContext>
      <section className="kanban">
        <TaskContainer
          status="backlog"
          tasks={backlogTasks}
          inStatusTasks={backlogTasks.length}
          totalTasks={totalTasks}
          onAddTask={() => setShowCreateTask(true)}
        />
        <TaskContainer
          status="todo"
          tasks={todoTasks}
          inStatusTasks={todoTasks.length}
          totalTasks={totalTasks}
          onAddTask={() => setShowCreateTask(true)}
        />
        <TaskContainer
          status="in-progress"
          tasks={inProgressTasks}
          inStatusTasks={inProgressTasks.length}
          totalTasks={totalTasks}
          onAddTask={() => setShowCreateTask(true)}
        />
        <TaskContainer
          status="done"
          tasks={doneTasks}
          inStatusTasks={doneTasks.length}
          totalTasks={totalTasks}
          onAddTask={() => setShowCreateTask(true)}
        />
        <TaskContainer
          status="cancelled"
          tasks={cancelledTasks}
          inStatusTasks={cancelledTasks.length}
          totalTasks={totalTasks}
          onAddTask={() => setShowCreateTask(true)}
        />
      </section>
      {showCreateTask && (
        <CreateTask
          status={createTaskStatus}
          closeModal={() => setShowCreateTask(false)}
        />
      )}
    </DndContext>
  );
};

export default Kanban;
