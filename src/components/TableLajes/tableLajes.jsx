import TableDateSelector from "../TableDateSelector/tableDateSelector";
import TableFilter from "../TableFilter/tableFilter";
import TableLoadMore from "../TableLoadMore/tableLoadMore";
import TableRow from "../TableRow/tableRow";
import "./tableLajes.css";

function TableLajes() {
  return (
    <div className="table-container">

      <TableFilter filterName="Orçamento" />

      <div className="table-lajes-container">
        <TableDateSelector/>
        <table className="table-lajes">
          <colgroup>
            <col style={{ width: "15%" }} />
            <col style={{ width: "35%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead className="table-header">
            <tr className="row">
              <th>ID</th>
              <th>Cliente</th>
              <th>m²</th>
              <th>Atualizado em</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
          </tbody>
        </table>
      <TableLoadMore/>
      </div>
      
    </div>
  );
}

export default TableLajes;
