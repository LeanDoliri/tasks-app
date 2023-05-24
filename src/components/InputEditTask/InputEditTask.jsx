import { useState } from "react";
import inputEditIcon from "../../assets/inputEditIcon.svg";
import "./InputEditTask.css";

export function InputEditTask({ editTask, oldTitle }) {
  const [updatedTask, setUpdatedTask] = useState("");

  const updatingTask = (e) => {
    e.preventDefault();
    if (updatedTask !== "") {
      editTask(updatedTask);
      setUpdatedTask("");
    }
  };

  return (
    <form className="inputEditTask-form" onSubmit={updatingTask}>
      <input
        className="inputEditTask-input"
        type="text"
        placeholder={oldTitle}
        value={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
      />
      <img
        className="inputEditTask-icon"
        src={inputEditIcon}
        alt="input-icon"
        onClick={updatingTask}
      />
    </form>
  );
}
