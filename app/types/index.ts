export type TaskStatus =
  | "backlog"
  | "todo"
  | "in-progress"
  | "done"
  | "cancelled";
export type TaskPriority = "low" | "medium" | "high";
export interface ITask {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: TaskPriority;
  assignee?: string;
  labels?: string[];
}
export interface IKanban {
  tasks: ITask[];
}
