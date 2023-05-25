import { FILTERS } from "../../constants";
import { Filter } from "../Filter/Filter";
import "./ListOfFilters.css"

export function ListOfFilters({ activeFilter, setActiveFilter }) {
  return (
    <section className="listOfFilters">
      <Filter
        isSelected={activeFilter === FILTERS.showAll}
        filter={FILTERS.showAll}
        setActiveFilter={setActiveFilter}
      >
        {FILTERS.showAll}
      </Filter>
      <Filter
        isSelected={activeFilter === FILTERS.showComplete}
        filter={FILTERS.showComplete}
        setActiveFilter={setActiveFilter}
      >
        {FILTERS.showComplete}
      </Filter>
      <Filter
        isSelected={activeFilter === FILTERS.showIncomplete}
        filter={FILTERS.showIncomplete}
        setActiveFilter={setActiveFilter}
      >
        {FILTERS.showIncomplete}
      </Filter>
    </section>
  );
}
