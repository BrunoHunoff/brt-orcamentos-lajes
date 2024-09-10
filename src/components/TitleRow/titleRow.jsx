import { useState } from "react"
import ArrowUp from "../Icons/ArrowUp"
import DeleteIcon from "../Icons/DeleteIcon"
import './titleRow.css'

function TitleRow({title, onToggle}){
    const [open, setOpen] = useState(true)

    const toggleOpen = () => {
        setOpen(!open)
        onToggle()
    }
    

    return (
        <div className="title-row">
            <button id="toggle-btn" onClick={toggleOpen} className={`btn arrow ${open ? '' : 'closed'}`}><ArrowUp/></button>
            <span>{title}</span>
            <button className="btn"><DeleteIcon height='28px' width='28px'/></button>
        </div>
    )
}

export default TitleRow