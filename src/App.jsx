import { useEffect, useState } from "react";
import "./App.css";
import { InputTask } from "./components/InputTask/InputTask";
import { Title } from "./components/Title/Title";
import { ListOfTasks } from "./components/ListOfTasks/ListOfTasks";
import { ListOfFilters } from "./components/ListOfFilters/ListOfFilters";
import { useFilter } from "./hooks/useFilter";
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

  const { filtered, activeFilter, setActiveFilter } = useFilter({ tasksList });

  function addNewTask (title) {
    const newTasksList = newTask({tasksList, title});
    setTasksList(newTasksList);
  };

  function changeStatus (id) {
    const newTasksList = setStatus({tasksList, id});
    setTasksList(newTasksList);
  };

  function deleteTask (id) {
    const newTasksList = removeTask({tasksList, id});
    setTasksList(newTasksList);
  };

  function updateTask ({id, newValue}) {
    const newTasksList = modifyTask(tasksList, id, newValue);
    setTasksList(newTasksList);
  };

  useEffect(() => {
    saveInLocalStorage({tasksList});
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
