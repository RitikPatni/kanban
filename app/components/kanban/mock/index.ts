import type { ITask } from "~/types";
import { STATUS_NAME } from "~/constants";

const mockTasks: {
  [STATUS_NAME.BACKLOG]: ITask[];
  [STATUS_NAME.TODO]: ITask[];
  [STATUS_NAME.IN_PROGRESS]: ITask[];
  [STATUS_NAME.DONE]: ITask[];
  [STATUS_NAME.CANCELLED]: ITask[];
} = {
  [STATUS_NAME.BACKLOG]: [
    {
      id: "1",
      title: "Design Landing Page",
      description: "Create a responsive design for the new landing page.",
      status: STATUS_NAME.BACKLOG,
      priority: "high",
      assignee: "Alice",
      labels: ["design", "frontend"],
    },
  ],
  [STATUS_NAME.TODO]: [],
  [STATUS_NAME.IN_PROGRESS]: [],
  [STATUS_NAME.DONE]: [],
  [STATUS_NAME.CANCELLED]: [],
};

export default mockTasks;
