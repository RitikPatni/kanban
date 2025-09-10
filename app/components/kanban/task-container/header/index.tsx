import "./index.scss";

import backlogIcon from "~/assets/icons/backlog.svg";
import cancelledIcon from "~/assets/icons/cancelled.svg";
import doneIcon from "~/assets/icons/done.svg";
import inProgressIcon from "~/assets/icons/in-progress.svg";
import overflowIcon from "~/assets/icons/overflow.svg";
import plusIcon from "~/assets/icons/plus.svg";
import todoIcon from "~/assets/icons/todo.svg";

export type Title = "Backlog" | "Cancelled" | "Done" | "In Progress" | "Todo";
export interface IHeaderProps {
  title: Title;
  totalTasks?: number;
  inStatusTasks?: number;
}
const Header = ({ title, inStatusTasks, totalTasks }: IHeaderProps) => {
  const getStatusIcon = (title: Title) => {
    switch (title) {
      case "Backlog":
        return backlogIcon;
      case "Cancelled":
        return cancelledIcon;
      case "Done":
        return doneIcon;
      case "In Progress":
        return inProgressIcon;
      case "Todo":
        return todoIcon;
      default:
        return null;
    }
  };
  const statusIcon = getStatusIcon(title);

  return (
    <header className="header">
      <div className="header__info">
        {statusIcon ? (
          <div className="header__info__icon">
            <img src={statusIcon} alt={`${title} Icon`} />
          </div>
        ) : null}
        <div className="header__info__title">{title}</div>
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
