import type { TaskStatus } from "~/types";
import backlogIcon from "~/assets/icons/backlog.svg";
import cancelledIcon from "~/assets/icons/cancelled.svg";
import doneIcon from "~/assets/icons/done.svg";
import inProgressIcon from "~/assets/icons/in-progress.svg";
import todoIcon from "~/assets/icons/todo.svg";

export const getStatusIcon = (status: TaskStatus) => {
  switch (status) {
    case "backlog":
      return backlogIcon;
    case "todo":
      return todoIcon;
    case "in-progress":
      return inProgressIcon;
    case "done":
      return doneIcon;
    case "cancelled":
      return cancelledIcon;
    default:
      return "";
  }
};
export const getStatusTitle = (status: TaskStatus) => {
  switch (status) {
    case "backlog":
      return "Backlog";
    case "todo":
      return "Todo";
    case "in-progress":
      return "In Progress";
    case "done":
      return "Done";
    case "cancelled":
      return "Cancelled";
    default:
      return "";
  }
};
