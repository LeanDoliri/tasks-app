import "./Filter.css";

export function Filter({ children, isSelected, filter, setActiveFilter }) {
  const handleClick = () => {
    setActiveFilter(filter);
  };

  const className = `filter ${isSelected ? "active" : ""}`;

  return (
    <span className={className} onClick={handleClick}>
      {children}
    </span>
  );
}
