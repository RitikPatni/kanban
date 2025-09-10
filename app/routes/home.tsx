import Kanban from "~/components/kanban";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanban" },
    { name: "description", content: "Welcome to Your Kanban!" },
  ];
}

export default function Home() {
  return <Kanban />;
}
