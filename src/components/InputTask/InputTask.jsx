import { useState } from "react";
import { newTask } from "../../logics/functionsTasks";
import inputNewIcon from "../../assets/inputNewIcon.svg";
import "./InputTask.css";

export function InputTask({ tasksList, setTasksList }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const newTasksList = newTask({ tasksList, title });
      setTasksList(newTasksList);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inputTask-form">
      <input
        className="inputTask-input"
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="inputTask-icon" type="submit">
        <img src={inputNewIcon} alt="input-icon" />
      </button>
    </form>
  );
}
