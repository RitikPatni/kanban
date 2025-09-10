import type { ITaskProps } from "~/components/kanban/task-container/task";
import Kanban from "~/components/kanban";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanban" },
    { name: "description", content: "Welcome to Your Kanban!" },
  ];
}

export default function Home() {
  const tasks: {
    backlog: ITaskProps[];
    todo: ITaskProps[];
    inProgress: ITaskProps[];
    done: ITaskProps[];
    cancelled: ITaskProps[];
  } = {
    backlog: [
      {
        title: "Design new UI",
        description: "Create a modern and user-friendly interface",
        priority: "high",
        assignee: "Alice",
      },
    ],
    todo: [
      {
        title: "Write documentation",
        description: "Document the API and user guides",
        priority: "low",
        assignee: "Grace",
      },
    ],
    inProgress: [
      {
        title: "Develop API",
        description: "Create RESTful endpoints for the application",
        priority: "med",
        assignee: "Frank",
      },
    ],
    done: [
      {
        title: "Deploy to production",
        description: "Deploy the latest version to the production server",
        priority: "low",
        assignee: "David",
      },
    ],
    cancelled: [
      {
        title: "Old Task",
        description: "This task was cancelled",
        priority: "low",
        assignee: "Eve",
      },
    ],
  };
  return (
    <Kanban
      backlogTasks={tasks.backlog}
      cancelledTasks={tasks.cancelled}
      doneTasks={tasks.done}
      inProgressTasks={tasks.inProgress}
      todoTasks={tasks.todo}
    />
  );
}
