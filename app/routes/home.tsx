import Kanban from "~/components/kanban";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanban" },
    { name: "description", content: "Welcome to Your Kanban!" },
  ];
}

export default function Home() {
  return (
    <Kanban
      backlogTasks={[
        {
          title: "Design new UI",
          description: "Create a modern and user-friendly interface",
          priority: "high",
          assignee: "Alice",
        },
        {
          title: "Set up database",
          description: "Install and configure PostgreSQL",
          priority: "med",
          assignee: "Bob",
        },
        {
          title: "Implement authentication",
          description: "Add user login and registration",
          priority: "high",
          assignee: "Charlie",
        },
      ]}
      cancelledTasks={[
        {
          title: "Old Task",
          description: "This task was cancelled",
          priority: "low",
          assignee: "Eve",
        },
      ]}
      doneTasks={[
        {
          title: "Deploy to production",
          description: "Deploy the latest version to the production server",
          priority: "low",
          assignee: "David",
        },
      ]}
      inProgressTasks={[
        {
          title: "Develop API",
          description: "Create RESTful endpoints for the application",
          priority: "med",
          assignee: "Frank",
        },
      ]}
      todoTasks={[
        {
          title: "Write documentation",
          description: "Document the API and user guides",
          priority: "low",
          assignee: "Grace",
        },
      ]}
    />
  );
}
