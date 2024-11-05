import TableBtn from "../TableBtn/tableBtn";
import TableDateSelector from "../TableDateSelector/tableDateSelector";
import TableFilter from "../TableFilter/tableFilter";
import TableRow from "../TableRow/tableRow";
import "./tableLajes.css";


function TableLajes({ headerItens, filterName, onButtonClick, data, onDelete, isCostumer, onEditClick }) {

  return (
    <div className="table-container">
      <TableFilter onButtonClick={onButtonClick} filterName={filterName} />

      <div className="table-lajes-container">
        <TableDateSelector />

        <table className="table-lajes">
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead className="lajes-table-header">
            <tr className="lajes-header-row">
              <th>{headerItens[0]}</th>
              <th>{headerItens[1]}</th>
              <th>{headerItens[2]}</th>
              <th>{headerItens[3]}</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data.map((item, index) => {
              console.log(item)
              return (
                <TableRow
                  key={item.id}
                  data={item}
                  onDelete={() => onDelete(index)}
                  isCostumer={isCostumer}
                  onEditClient={onEditClick}
                />
              );
            })}
          </tbody>
        </table>
        <TableBtn onClick={null} btnName="Carregar Mais" />
      </div>
    </div>
  );
}

export default TableLajes;
