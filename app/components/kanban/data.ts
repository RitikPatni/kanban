import { getPriority } from "os";
import { title } from "process";

const kanbanData = {
  title: "Kanban Board",
  columns: [
    {
      id: "backlog",
      title: "Backlog",
      tasks: [
        {
          id: "task-1",
          title: "Design Homepage",
          description: "Create wireframes and mockups for the homepage.",
          priority: "high",
          assignee: "Alice",
        },
        {
          id: "task-2",
          title: "Set Up Database",
          description: "Install and configure the PostgreSQL database.",
          getPriority: "med",
          assignee: "Bob",
        },
      ],
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        {
          id: "task-3",
          title: "Develop Login Feature",
          description: "Implement user authentication and authorization.",
          priority: "high",
          assignee: "Charlie",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: "task-4",
          title: "Deploy Application",
          description: "Deploy the application to the production server.",
          priority: "low",
          assignee: "David",
        },
      ],
    },
  ],
};
