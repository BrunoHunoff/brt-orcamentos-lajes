import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/Edit";
import FileIcon from "../Icons/FileIcon";
import "./tableRow.css";

function TableRow() {
  return (
    <tr className="table-row">
      <td className="table-data">00-000-0000</td>
      <td className="table-data">Cliente Teste</td>
      <td className="table-data">500</td>
      <td className="table-data">01/09/2024</td>
      <td className="table-data actions-container">
        <button className='action'>
            <EditIcon />
        </button>
        <button className='action'>
            <DeleteIcon className='action'/>
        </button>
        <button className="action">
            <FileIcon className='action'/>
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
