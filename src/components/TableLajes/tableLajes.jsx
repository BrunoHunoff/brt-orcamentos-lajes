import { useState } from "react";
import TableBtn from "../TableBtn/tableBtn";
import TableDateSelector from "../TableDateSelector/tableDateSelector";
import TableFilter from "../TableFilter/tableFilter";
import TableRow from "../TableRow/tableRow";
import "./tableLajes.css";

function TableLajes() {

  const [itens, setItens] = useState(['', '', '', '', '',])

  const carregarMais = () => {
    setItens = setItens(prevItens => [...prevItens, '', '', '', '', ''])
  }

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
            {itens.map((iten, index) => {
              return <TableRow key={index}/>
            })}
          </tbody>
        </table>
        <TableBtn onClick={carregarMais} btnName='Carregar Mais'/>
      </div>
      
    </div>
  );
}

export default TableLajes;
