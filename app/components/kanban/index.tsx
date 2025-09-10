import "./index.scss";

import type { ITask, TaskStatus } from "~/types";

import CreateTask from "./create-task";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import TaskContainer from "./task-container";
import { useEffect, useState } from "react";
import { STATUS_NAME } from "~/constants";
import ViewTask from "./view-task";
import mockTasks from "./mock";

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
    if (total === 0) {
      localStorage.setItem(
        STATUS_NAME.BACKLOG,
        JSON.stringify(mockTasks[STATUS_NAME.BACKLOG])
      );
      localStorage.setItem(
        STATUS_NAME.TODO,
        JSON.stringify(mockTasks[STATUS_NAME.TODO])
      );
      localStorage.setItem(
        STATUS_NAME.IN_PROGRESS,
        JSON.stringify(mockTasks[STATUS_NAME.IN_PROGRESS])
      );
      localStorage.setItem(
        STATUS_NAME.DONE,
        JSON.stringify(mockTasks[STATUS_NAME.DONE])
      );
      localStorage.setItem(
        STATUS_NAME.CANCELLED,
        JSON.stringify(mockTasks[STATUS_NAME.CANCELLED])
      );
      setTasks(mockTasks);
    }
  }, [tasks]);
  const onAddTaskSubmit = (task: ITask) => {
    const { status } = task;
    const existingTasks: ITask[] = localStorage.getItem(status)
      ? JSON.parse(localStorage.getItem(status) || "")
      : [];
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem(status, JSON.stringify(updatedTasks));
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
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

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
    if (!item || !over) return;

    const sourceStatus = item.task.status;
    const destinationStatus = over.id as string;
    if (sourceStatus === destinationStatus) return;

    const getTasks = (status: string): ITask[] => {
      try {
        return JSON.parse(localStorage.getItem(status) || "[]");
      } catch {
        return [];
      }
    };

    const sourceTasks = getTasks(sourceStatus);
    const destinationTasks = getTasks(destinationStatus);

    const filteredSourceTasks = sourceTasks.filter(
      (task: ITask) => task.id !== item.task.id
    );
    const updatedTask = { ...item.task, status: destinationStatus };
    const newDestinationTasks = [...destinationTasks, updatedTask];

    localStorage.setItem(sourceStatus, JSON.stringify(filteredSourceTasks));
    localStorage.setItem(
      destinationStatus,
      JSON.stringify(newDestinationTasks)
    );

    setTasks((prev) => ({
      ...prev,
      [sourceStatus]: filteredSourceTasks,
      [destinationStatus]: newDestinationTasks,
    }));
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
          setSelectedTask={setSelectedTask}
        />
        <TaskContainer
          status={STATUS_NAME.TODO}
          tasks={tasks[STATUS_NAME.TODO]}
          inStatusTasks={tasks[STATUS_NAME.TODO].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
          setSelectedTask={setSelectedTask}
        />
        <TaskContainer
          status={STATUS_NAME.IN_PROGRESS}
          tasks={tasks[STATUS_NAME.IN_PROGRESS]}
          inStatusTasks={tasks[STATUS_NAME.IN_PROGRESS].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
          setSelectedTask={setSelectedTask}
        />
        <TaskContainer
          status={STATUS_NAME.DONE}
          tasks={tasks[STATUS_NAME.DONE]}
          inStatusTasks={tasks[STATUS_NAME.DONE].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
          setSelectedTask={setSelectedTask}
        />
        <TaskContainer
          status={STATUS_NAME.CANCELLED}
          tasks={tasks[STATUS_NAME.CANCELLED]}
          inStatusTasks={tasks[STATUS_NAME.CANCELLED].length}
          totalTasks={totalTasks}
          onAddTask={onAddTask}
          setSelectedTask={setSelectedTask}
        />
      </section>
      {showCreateTask && (
        <CreateTask
          status={createTaskStatus}
          closeModal={() => setShowCreateTask(false)}
          onAddTaskSubmit={onAddTaskSubmit}
        />
      )}
      {selectedTask ? (
        <ViewTask
          task={selectedTask}
          closeModal={() => setSelectedTask(null)}
        />
      ) : null}
    </DndContext>
  );
};

export default Kanban;
