import TableBtn from "../TableBtn/tableBtn";
import TableDateSelector from "../TableDateSelector/tableDateSelector";
import TableFilter from "../TableFilter/tableFilter";
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
          <thead className="lajes-table-header">
            <tr className="lajes-header-row">
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
          </tbody>
        </table>
        <TableBtn btnName='Carregar Mais'/>
      </div>
      
    </div>
  );
}

export default TableLajes;
