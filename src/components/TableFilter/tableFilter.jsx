import AddButton from "../Icons/AddButton";
import FilterIcon from "../Icons/FilterIcon";
import ListIcon from "../Icons/ListIcon";
import "./tableFilter.css";

function TableFilter(props) {
  return (
    <div className="table-filter">
      <button className="filter-button add">
        <AddButton className="add-icon" />
        <span className="add-button-txt">Novo {props.filterName}</span>
      </button>

      <div className="filter-container">
        <button className="filter-button filter">
          <ListIcon className="filter-icon" />
          <span className="filter-button-txt">Ordenar</span>
        </button>
        <button className="filter-button filter">
          <FilterIcon className="filter-icon" />
          <span className="filter-button-txt">Filtros</span>
        </button>
      </div>
    </div>
  );
}

export default TableFilter;
