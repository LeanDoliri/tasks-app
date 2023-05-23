import { useState } from "react";
import "./InputEditTask.css"

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
    <>
      <form onSubmit={updatingTask}>
        <input
          className="inputEditTask-input"
          type="text"
          placeholder={oldTitle}
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      </form>
    </>
  );
}
