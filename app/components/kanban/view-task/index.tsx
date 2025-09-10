import "./index.scss";

import type { ITask } from "~/types";
import Modal from "~/components/common/modal";
import TagsRow from "~/components/common/modal/tags-row";
import { useState } from "react";

interface IViewTaskProps {
  task: ITask;
  closeModal: () => void;
}
const ViewTask = ({ task, closeModal }: IViewTaskProps) => {
  const [fullScreen, setFullScreen] = useState(false);
  const { title, description, status, priority, assignee, labels } = task;
  return (
    <Modal
      title="View Task"
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
      closeModal={closeModal}
    >
      <div className="view-task">
        <h3 className="view-task__title">{title}</h3>
        <p className="view-task__description">{description}</p>
        <TagsRow
          status={status}
          priority={priority}
          assignee={assignee}
          labels={labels}
        />
      </div>
    </Modal>
  );
};

export default ViewTask;
