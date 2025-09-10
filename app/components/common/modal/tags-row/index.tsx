import "./index.scss";

import type { TaskPriority, TaskStatus } from "~/types";
import { getStatusIcon, getStatusTitle } from "~/utilities";

import labelIcon from "~/assets/icons/label.svg";
import priorityHiIcon from "~/assets/icons/priority-hi.svg";
import userIcon from "~/assets/icons/user.svg";

interface ITagsRowProps {
  status: TaskStatus;
  priority?: TaskPriority;
  assignee?: string;
  labels?: string[];
}
const TagsRow = ({ status, priority, assignee, labels }: ITagsRowProps) => {
  const statusIcon = getStatusIcon(status);
  const statusTitle = getStatusTitle(status);

  return (
    <div className="tags-row">
      <div className="tags-row__tag">
        <img src={statusIcon} alt={statusTitle} />
        <span className="tags-row__tag__label">{statusTitle}</span>
      </div>
      <div className="tags-row__tag">
        <img src={priorityHiIcon} alt="Priority" />
        <span className="tags-row__tag__label">Priority: {priority}</span>
      </div>
      <div className="tags-row__tag">
        <img src={userIcon} alt="Assignee" />
        <span className="tags-row__tag__label">Assignee: {assignee}</span>
      </div>
      <div className="tags-row__tag">
        <img src={labelIcon} alt="Label" />
        <span className="tags-row__tag__label">
          Label: {labels?.join(", ")}
        </span>
      </div>
    </div>
  );
};
export default TagsRow;
