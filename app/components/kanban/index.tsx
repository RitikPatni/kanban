import "./index.scss";

import type { ITask, TaskStatus } from "~/types";

import CreateTask from "./create-task";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import TaskContainer from "./task-container";
import { useState } from "react";

const Kanban = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const backlogTasks: ITask[] = localStorage.getItem("backlog")
    ? JSON.parse(localStorage.getItem("backlog") || "")
    : [];
  const todoTasks: ITask[] = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo") || "")
    : [];
  const inProgressTasks: ITask[] = localStorage.getItem("in-progress")
    ? JSON.parse(localStorage.getItem("in-progress") || "")
    : [];
  const doneTasks: ITask[] = localStorage.getItem("done")
    ? JSON.parse(localStorage.getItem("done") || "")
    : [];
  const cancelledTasks: ITask[] = localStorage.getItem("cancelled")
    ? JSON.parse(localStorage.getItem("cancelled") || "")
    : [];
  const [tasks, setTasks] = useState({
    backlog: backlogTasks,
    todo: todoTasks,
    inProgress: inProgressTasks,
    done: doneTasks,
    cancelled: cancelledTasks,
  });
  const totalTasks =
    tasks.backlog.length +
    tasks.todo.length +
    tasks.inProgress.length +
    tasks.done.length +
    tasks.cancelled.length;

  const [showCreateTask, setShowCreateTask] = useState(false);
  const [createTaskStatus, setCreateTaskStatus] =
    useState<TaskStatus>("backlog");
  const onAddTask = (status: TaskStatus) => {
    setShowCreateTask(true);
    setCreateTaskStatus(status);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const item = active.data.current;
    if (item && over) {
      const overStatus = over.id as string;
      if (item.task.status !== overStatus) {
        const sourceTasks = localStorage.getItem(item.task.status)
          ? JSON.parse(localStorage.getItem(item.task.status) || "")
          : [];
        const filteredSourceTasks = sourceTasks.filter(
          (task: ITask) => task.id !== item.task.id
        );
        localStorage.setItem(
          item.task.status,
          JSON.stringify(filteredSourceTasks)
        );
        const destinationTasks = localStorage.getItem(overStatus)
          ? JSON.parse(localStorage.getItem(overStatus) || "")
          : [];
        const updatedTask = { ...item.task, status: overStatus };
        destinationTasks.push(updatedTask);
        localStorage.setItem(overStatus, JSON.stringify(destinationTasks));
        setTasks((prev) => ({
          ...prev,
          [item.task.status]: filteredSourceTasks,
          [overStatus]: destinationTasks,
        }));
      }
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <section className="kanban">
        <TaskContainer
          status="backlog"
          tasks={backlogTasks}
          inStatusTasks={backlogTasks.length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status="todo"
          tasks={todoTasks}
          inStatusTasks={todoTasks.length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status="in-progress"
          tasks={inProgressTasks}
          inStatusTasks={inProgressTasks.length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status="done"
          tasks={doneTasks}
          inStatusTasks={doneTasks.length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status="cancelled"
          tasks={cancelledTasks}
          inStatusTasks={cancelledTasks.length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
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
