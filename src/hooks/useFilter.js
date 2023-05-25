import { useEffect, useState } from "react";
import { FILTERS } from "../constants";

export const useFilter = ({ tasksList }) => {
  const [filtered, setFiltered] = useState(tasksList);
  const [activeFilter, setActiveFilter] = useState(FILTERS.showAll);

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

  return { filtered, activeFilter, setActiveFilter };
};
