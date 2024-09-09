import ArrowUp from "../Icons/ArrowUp"
import DeleteIcon from "../Icons/DeleteIcon"
import './titleRow.css'

function TitleRow({title}){
    return (
        <div className="title-row">
            <button className="btn"><ArrowUp/></button>
            <span>{title}</span>
            <button className="btn"><DeleteIcon height='28px' width='28px'/></button>
        </div>
    )
}

export default TitleRow