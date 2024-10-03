
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/Edit";
import FileIcon from "../Icons/FileIcon";
import "./tableRow.css";

function TableRow( { onDelete, data }) {
  return (
    <tr className="table-row">
      <td className="table-data">{data.id}</td>
      <td className="table-data">{data.costumerName}</td>
      <td className="table-data">{data.footage}</td>
      <td className="table-data">{data.city + "/" + data.state}</td>
      <td className="table-data actions-container">
        <button className='action'>
            <EditIcon/>
        </button>
        <button className='action'>
          <DeleteIcon onClick={onDelete} width='20px' height='20px'/>
        </button>
        <button className="action">
            <FileIcon/>
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
