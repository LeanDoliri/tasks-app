import { useEffect, useState } from "react";
import "./App.css";
import { InputTask } from "./components/InputTask/InputTask";
import { Title } from "./components/Title/Title";
import { ListOfTasks } from "./components/ListOfTasks/ListOfTasks";
import { ListOfFilters } from "./components/ListOfFilters/ListOfFilters";
import { FILTERS } from "./constants";
import {
  newTask,
  setStatus,
  removeTask,
  modifyTask,
  saveInLocalStorage,
} from "./logics/functionsTasks";

function App() {
  const [tasksList, setTasksList] = useState(() => {
    const tasksInMemory = window.localStorage.getItem("tasks");
    return tasksInMemory ? JSON.parse(tasksInMemory) : [];
  });

  const [activeFilter, setActiveFilter] = useState(FILTERS.showAll);

  const [filtered, setFiltered] = useState(tasksList);

  const addNewTask = (title) => {
    const newTasksList = newTask(tasksList, title);
    setTasksList(newTasksList);
  };

  const changeStatus = (id) => {
    const newTasksList = setStatus(tasksList, id);
    setTasksList(newTasksList);
  };

  const deleteTask = (id) => {
    const newTasksList = removeTask(tasksList, id);
    setTasksList(newTasksList);
  };

  const updateTask = (id, newValue) => {
    const newTasksList = modifyTask(tasksList, id, newValue);
    setTasksList(newTasksList);
  };

  useEffect(() => {
    if (activeFilter === FILTERS.showAll) {
      setFiltered(tasksList);
    } else if (activeFilter === FILTERS.showComplete) {
      const updateTasksList = tasksList.filter((item) => item.status === true);
      setFiltered(updateTasksList);
    } else if (activeFilter === FILTERS.showIncomplete) {
      const updateTasksList = tasksList.filter((item) => item.status === false);
      setFiltered(updateTasksList);
    }
  }, [activeFilter, tasksList]);

  useEffect(() => {
    saveInLocalStorage(tasksList);
  }, [tasksList]);

  return (
    <main className="main">
      <Title />
      <InputTask addNewTask={addNewTask} />
      <ListOfFilters
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <ListOfTasks
        tasksList={filtered}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </main>
  );
}

export default App;
