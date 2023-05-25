import { useState } from "react";
import inputNewIcon from "../../assets/inputNewIcon.svg";
import "./InputTask.css";

export function InputTask({ addNewTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      addNewTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inputTask-form">
      <input
        className="inputTask-input"
        type="text"
        placeholder="New task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="inputTask-icon" type="submit">
        <img src={inputNewIcon} alt="input-icon" />
      </button>
    </form>
  );
}
