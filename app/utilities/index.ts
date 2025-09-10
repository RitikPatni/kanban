import { STATUS_NAME, TITLES } from "~/constants";

import type { TaskStatus } from "~/types";
import backlogIcon from "~/assets/icons/backlog.svg";
import cancelledIcon from "~/assets/icons/cancelled.svg";
import doneIcon from "~/assets/icons/done.svg";
import inProgressIcon from "~/assets/icons/in-progress.svg";
import todoIcon from "~/assets/icons/todo.svg";

export const getStatusIcon = (status: TaskStatus) => {
  switch (status) {
    case STATUS_NAME.BACKLOG:
      return backlogIcon;
    case STATUS_NAME.TODO:
      return todoIcon;
    case STATUS_NAME.IN_PROGRESS:
      return inProgressIcon;
    case STATUS_NAME.DONE:
      return doneIcon;
    case STATUS_NAME.CANCELLED:
      return cancelledIcon;
    default:
      return "";
  }
};
export const getStatusTitle = (status: TaskStatus) => {
  switch (status) {
    case STATUS_NAME.BACKLOG:
      return TITLES[STATUS_NAME.BACKLOG];
    case STATUS_NAME.TODO:
      return TITLES[STATUS_NAME.TODO];
    case STATUS_NAME.IN_PROGRESS:
      return TITLES[STATUS_NAME.IN_PROGRESS];
    case STATUS_NAME.DONE:
      return TITLES[STATUS_NAME.DONE];
    case STATUS_NAME.CANCELLED:
      return TITLES[STATUS_NAME.CANCELLED];
    default:
      return "";
  }
};
