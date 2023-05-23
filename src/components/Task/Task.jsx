import { useState } from "react";
import { InputEditTask } from "../InputEditTask/InputEditTask";
import "./Task.css";
import deleteIcon from "../../assets/deleteIcon.svg";
import editIcon from "../../assets/editIcon.svg";

export function Task({ task, changeStatus, deleteTask, updateTask }) {
  const { id, title, status } = task;
  const [edit, setEdit] = useState({ id: null, value: "" });

  const handleStatus = () => {
    changeStatus(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleEdit = () => {
    setEdit({ id: id, value: title });
  };

  const editTask = (value) => {
    updateTask(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <InputEditTask editTask={editTask} oldTitle={title} />;
  }

  const statusClass = `task-status ${
    status ? "statusComplete" : "statusIncomplete"
  }`;

  return (
    <article className="task">
      <p className="task-title">{title}</p>
      <div className="task-controllers">
        <span className={statusClass} onClick={handleStatus}>
          {status ? "complete" : "incomplete"}
        </span>
        <img
          src={deleteIcon}
          alt="delete-icon"
          className="task-button"
          onClick={handleDelete}
        />

        <img
          src={editIcon}
          alt="edit-icon"
          className="task-button"
          onClick={handleEdit}
        />
      </div>
    </article>
  );
}
