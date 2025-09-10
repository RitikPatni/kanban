import type { TaskPriority, TaskStatus } from "~/types";

export const STATUS_NAME: {
  BACKLOG: TaskStatus;
  IN_PROGRESS: TaskStatus;
  DONE: TaskStatus;
  TODO: TaskStatus;
  CANCELLED: TaskStatus;
} = {
  BACKLOG: "backlog",
  IN_PROGRESS: "in-progress",
  DONE: "done",
  TODO: "todo",
  CANCELLED: "cancelled",
};
export const PRIORITIES: {
  LOW: TaskPriority;
  MEDIUM: TaskPriority;
  HIGH: TaskPriority;
} = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};
export const TITLES = {
  [STATUS_NAME.BACKLOG]: "Backlog",
  [STATUS_NAME.TODO]: "To Do",
  [STATUS_NAME.IN_PROGRESS]: "In Progress",
  [STATUS_NAME.DONE]: "Done",
  [STATUS_NAME.CANCELLED]: "Cancelled",
};
