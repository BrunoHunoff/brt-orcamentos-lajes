import AddButton from "../Icons/AddButton";
import FilterIcon from "../Icons/FilterIcon";
import ListIcon from "../Icons/ListIcon";
import { Link } from 'react-router-dom';
import "./tableFilter.css";

function TableFilter({ onButtonClick, filterName }) {  // Corrigir para usar destructuring nas props
  return (
    <div className="table-filter">
      <button onClick={onButtonClick} className="filter-link add">
        <AddButton className="add-icon" />
        <span className="add-button-txt">Novo {filterName}</span> {/* Usando filterName da prop */}
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
