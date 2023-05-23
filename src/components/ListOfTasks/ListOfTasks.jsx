import { Task } from "../Task/Task";
import "./ListOfTasks.css"

export function ListOfTasks({
  tasksList,
  changeStatus,
  deleteTask,
  updateTask,
}) {
  return (
    <section className="listOfTasks">
      {tasksList.map((task) => (
        <Task
          key={task.id}
          task={task}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </section>
  );
}
