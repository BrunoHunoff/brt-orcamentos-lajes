import './tableBtn.css'

function TableBtn({ btnName, id, onClick }) {

    return(
        <div className='table-load-more'>
            <button id={id} onClick={onClick} className='load-btn'>{btnName}</button>
        </div>
    )
}

export default TableBtn