import "./index.scss";

import { getStatusIcon, getStatusTitle } from "~/utilities";

import type { TaskStatus } from "~/types";
import overflowIcon from "~/assets/icons/overflow.svg";
import plusIcon from "~/assets/icons/plus.svg";

export interface IHeaderProps {
  status: TaskStatus;
  totalTasks?: number;
  inStatusTasks?: number;
  onAddTask: (task: TaskStatus) => void;
}
const Header = ({
  status,
  inStatusTasks,
  totalTasks,
  onAddTask,
}: IHeaderProps) => {
  const statusIcon = getStatusIcon(status);
  const statusTitle = getStatusTitle(status);

  return (
    <header className="header">
      <div className="header__info">
        {statusIcon ? (
          <div className="header__info__icon">
            <img src={statusIcon} alt={`${statusTitle} Icon`} />
          </div>
        ) : null}
        <div className="header__info__title">{statusTitle}</div>
        <div className="header__info__status">
          {inStatusTasks ? (
            <>
              <span className="header__info__status__in-progress">
                {inStatusTasks || 0}
              </span>
              /{" "}
            </>
          ) : null}
          {totalTasks || 0}
        </div>
      </div>
      <div className="header__actions">
        <button
          className="header__actions__action"
          aria-label="Add Task"
          type="button"
          onClick={() => onAddTask(status)}
        >
          <img src={plusIcon} alt="Add Task" />
        </button>
        <button
          className="header__actions__action"
          aria-label="More Options"
          type="button"
        >
          <img src={overflowIcon} alt="More Options" />
        </button>
      </div>
    </header>
  );
};
export default Header;
