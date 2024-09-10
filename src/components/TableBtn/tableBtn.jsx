import './tableBtn.css'

function TableBtn({ btnName }) {

    return(
        <div className='table-load-more'>
            <button className='load-btn'>{btnName}</button>
        </div>
    )
}

export default TableBtn