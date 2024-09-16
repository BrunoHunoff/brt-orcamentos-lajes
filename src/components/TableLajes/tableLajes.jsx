import { useState } from "react";
import TableBtn from "../TableBtn/tableBtn";
import TableDateSelector from "../TableDateSelector/tableDateSelector";
import TableFilter from "../TableFilter/tableFilter";
import TableRow from "../TableRow/tableRow";
import "./tableLajes.css";

function TableLajes({ headerItens, filterName  }) {

  const [itens, setItens] = useState(['', '', '', '', '',])

  const carregarMais = () => {
    setItens = setItens(prevItens => [...prevItens, '', '', '', '', ''])
  }

  const deleteIten = (index) => {
    setItens(prevItens => prevItens.filter((_, i) => i !== index))
}

  return (
    <div className="table-container">

      <TableFilter filterName={filterName} />

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
              <th>{headerItens[0]}</th>
              <th>{headerItens[1]}</th>
              <th>{headerItens[2]}</th>
              <th>{headerItens[3]}</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">
            {itens.map((iten, index) => {
              return <TableRow key={index} onDelete ={() => deleteIten(index)}/>
            })}
          </tbody>
        </table>
        <TableBtn onClick={carregarMais} btnName='Carregar Mais'/>
      </div>
      
    </div>
  );
}

export default TableLajes;
