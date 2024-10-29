import { useNavigate } from "react-router-dom";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/Edit";
import FileIcon from "../Icons/FileIcon";
import "./tableRow.css";


function TableRow( { onDelete, data, onEdit, isCostumer }) {

  const rowData = isCostumer
    ? [
        data.id,
        data.name,
        `${data.city}/${data.state}`,
        data.cnpjCpf,
      ]
    : [
        data.id,
        data.costumerName,
        data.footage,
        `${data.city}/${data.state}`,
      ];

  console.log(data)

  const navigate = useNavigate()

  function onEdit() {

    navigate(`/orcamento/${rowData[0]}`)
  }

  return (
    <tr className="table-row">
      {rowData.map ((item, index) => {
        return <td key={index} className="table-data">{item}</td>
      })}
       
      <td className="table-data actions-container">
        <button className='action' onClick={() => onEdit(data[0])}>
            <EditIcon/>
        </button>
        <button className='action'>
          <DeleteIcon onClick={() => onDelete(data[0])} width='20px' height='20px'/>
        </button>
        <button className="action">
            <FileIcon/>
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
