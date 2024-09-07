import AddButton from "../Icons/AddButton";
import FilterIcon from "../Icons/FilterIcon";
import ListIcon from "../Icons/ListIcon";
import { Link } from 'react-router-dom';
import "./tableFilter.css";

function TableFilter(props) {
  return (
    <div className="table-filter">
      <Link to='/orcamento' className="filter-link add" >
        <AddButton className="add-icon" />
        <span className="add-button-txt">Novo {props.filterName}</span>
      </Link>

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
