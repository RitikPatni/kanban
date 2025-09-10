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
      id: "IMP-1",
      title:
        "Design for adding priority, assignee and label in task creation flow",
      description:
        "Create a design for adding priority, assignee and label in task creation flow",
      status: STATUS_NAME.BACKLOG,
      priority: "high",
      assignee: "Ritik",
      labels: ["design", "frontend"],
    },
    {
      id: "IMP-2",
      title: "Add Markdown support in task description",
      description:
        "Add support for Markdown in task description to allow rich text formatting",
      status: STATUS_NAME.BACKLOG,
      priority: "medium",
      assignee: "Ritik",
      labels: ["feature", "frontend"],
    },
    {
      id: "IMP-3",
      title: "Allow edit option in individual task cards",
      description:
        "Add an edit option in individual task cards to allow quick edits",
      status: STATUS_NAME.BACKLOG,
      priority: "low",
      assignee: "Ritik",
      labels: ["feature", "frontend"],
    },
    {
      id: "IMP-4",
      title: "Update favicon",
      description: "Update the favicon to a new design",
      status: STATUS_NAME.BACKLOG,
      priority: "low",
      assignee: "Ritik",
      labels: ["feature", "frontend"],
    },
    {
      id: "IMP-5",
      title: "Add light mode feature",
      description: "Implement a light mode theme for the application",
      status: STATUS_NAME.BACKLOG,
      priority: "low",
      assignee: "Ritik",
      labels: ["feature", "frontend"],
    },
  ],
  [STATUS_NAME.TODO]: [],
  [STATUS_NAME.IN_PROGRESS]: [],
  [STATUS_NAME.DONE]: [],
  [STATUS_NAME.CANCELLED]: [],
};

export default mockTasks;
