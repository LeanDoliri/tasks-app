export const newTask = (tasksList, title) => {
  const newTask = {
    id: `taskAt:${new Date()}`,
    title,
    status: false,
  };

  const itemsList = [...tasksList];
  itemsList.push(newTask);

  return sortTaskList(itemsList);
};

export const setStatus = (tasksList, id) => {
  const updatedTasksList = tasksList.map((item) => {
    if (item.id === id) {
      return { ...item, status: !item.status };
    }
    return item;
  });

  return sortTaskList(updatedTasksList);
};

export const removeTask = (tasksList, id) => {
  const updateTasksList = tasksList.filter((item) => item.id !== id);
  return sortTaskList(updateTasksList);
};

export const modifyTask = (tasksList, id, newValue) => {
  const updateTasksList = tasksList.filter((item) => item.id !== id);

  const updatedTask = tasksList.find((item) => item.id === id);
  updatedTask.title = newValue;

  updateTasksList.push(updatedTask);

  return sortTaskList(updateTasksList);
};

export const saveInLocalStorage = (data) => {
  window.localStorage.setItem("tasks", JSON.stringify(data));
};

const sortTaskList = (list) => {
  const sortList = list.sort((a, b) => {
    if (a.status && !b.status) {
      return 1;
    } else if (!a.status && b.status) {
      return -1;
    } else {
      return 0;
    }
  });

  return sortList;
};
