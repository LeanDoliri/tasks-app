import { useState } from "react";
import inputEditIcon from "../../assets/inputEditIcon.svg";
import "./InputEditTask.css";

export function InputEditTask({ editTask, oldTitle }) {
  const [newTitle, setNewTitle] = useState("");

  const updatingTask = (e) => {
    e.preventDefault();
    if (newTitle !== "") {
      editTask({ newTitle });
      setNewTitle("");
    }
  };

  return (
    <form className="inputEditTask-form" onSubmit={updatingTask}>
      <input
        className="inputEditTask-input"
        type="text"
        placeholder={oldTitle}
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button type="submit" className="inputEditTask-icon">
        <img src={inputEditIcon} alt="input-icon" />
      </button>
    </form>
  );
}
