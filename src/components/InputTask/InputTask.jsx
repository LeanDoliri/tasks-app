import { useState } from "react";
import "./InputTask.css"

export function InputTask({ addNewTask }) {
  const [newTask, setNewTask] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    if (newTask) {
      addNewTask(newTask);
      setNewTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleInput} className="inputTask-form">
        <input
          className="inputTask-input"
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
    </>
  );
}
