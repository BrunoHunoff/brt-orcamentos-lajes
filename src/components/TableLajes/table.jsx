import TableFilter from "../TableFilter/tableFilter";
import "./table.css";

function TableLajes() {
  return (
    <div className="table-container">
      <TableFilter filterName="Orçamento" />

      <div className="table-lajes-container">
        <table className="table-lajes">
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <thead className="table-header">
            <tr className="row">
              <th>ID</th>
              <th>Cliente</th>
              <th>m²</th>
              <th>Atualizado em</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default TableLajes;
