import "./index.scss";

import type { ITask, TaskStatus } from "~/types";

import CreateTask from "./create-task";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import TaskContainer from "./task-container";
import { useEffect, useState } from "react";
import { STATUS_NAME } from "~/constants";

const Kanban = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const backlogTasks: ITask[] = localStorage.getItem(STATUS_NAME.BACKLOG)
    ? JSON.parse(localStorage.getItem(STATUS_NAME.BACKLOG) || "")
    : [];
  const todoTasks: ITask[] = localStorage.getItem(STATUS_NAME.TODO)
    ? JSON.parse(localStorage.getItem(STATUS_NAME.TODO) || "")
    : [];
  const inProgressTasks: ITask[] = localStorage.getItem(STATUS_NAME.IN_PROGRESS)
    ? JSON.parse(localStorage.getItem(STATUS_NAME.IN_PROGRESS) || "")
    : [];
  const doneTasks: ITask[] = localStorage.getItem(STATUS_NAME.DONE)
    ? JSON.parse(localStorage.getItem(STATUS_NAME.DONE) || "")
    : [];
  const cancelledTasks: ITask[] = localStorage.getItem(STATUS_NAME.CANCELLED)
    ? JSON.parse(localStorage.getItem(STATUS_NAME.CANCELLED) || "")
    : [];
  const [tasks, setTasks] = useState({
    [STATUS_NAME.BACKLOG]: backlogTasks,
    [STATUS_NAME.TODO]: todoTasks,
    [STATUS_NAME.IN_PROGRESS]: inProgressTasks,
    [STATUS_NAME.DONE]: doneTasks,
    [STATUS_NAME.CANCELLED]: cancelledTasks,
  });
  const [totalTasks, setTotalTasks] = useState(0);
  useEffect(() => {
    const total =
      tasks[STATUS_NAME.BACKLOG].length +
      tasks[STATUS_NAME.TODO].length +
      tasks[STATUS_NAME.IN_PROGRESS].length +
      tasks[STATUS_NAME.DONE].length +
      tasks[STATUS_NAME.CANCELLED].length;
    setTotalTasks(total);
  }, []);
  const onAddTaskSubmit = (task: ITask) => {
    const { status } = task;
    const existingTasks: ITask[] = localStorage.getItem(status)
      ? JSON.parse(localStorage.getItem(status) || "")
      : [];
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem(task.status, JSON.stringify(updatedTasks));
    setTasks((prev) => ({
      ...prev,
      [status]: updatedTasks,
    }));
    const total =
      tasks[STATUS_NAME.BACKLOG].length +
      tasks[STATUS_NAME.TODO].length +
      tasks[STATUS_NAME.IN_PROGRESS].length +
      tasks[STATUS_NAME.DONE].length +
      tasks[STATUS_NAME.CANCELLED].length;
    setTotalTasks(total);

    setShowCreateTask(false);
  };
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [createTaskStatus, setCreateTaskStatus] = useState<TaskStatus>(
    STATUS_NAME.BACKLOG
  );
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
          status={STATUS_NAME.BACKLOG}
          tasks={tasks[STATUS_NAME.BACKLOG]}
          inStatusTasks={tasks[STATUS_NAME.BACKLOG].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status={STATUS_NAME.TODO}
          tasks={tasks[STATUS_NAME.TODO]}
          inStatusTasks={tasks[STATUS_NAME.TODO].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status={STATUS_NAME.IN_PROGRESS}
          tasks={tasks[STATUS_NAME.IN_PROGRESS]}
          inStatusTasks={tasks[STATUS_NAME.IN_PROGRESS].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status={STATUS_NAME.DONE}
          tasks={tasks[STATUS_NAME.DONE]}
          inStatusTasks={tasks[STATUS_NAME.DONE].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
        <TaskContainer
          status={STATUS_NAME.CANCELLED}
          tasks={tasks[STATUS_NAME.CANCELLED]}
          inStatusTasks={tasks[STATUS_NAME.CANCELLED].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
        />
      </section>
      {showCreateTask && (
        <CreateTask
          status={createTaskStatus}
          closeModal={() => setShowCreateTask(false)}
          onAddTaskSubmit={onAddTaskSubmit}
        />
      )}
    </DndContext>
  );
};

export default Kanban;
