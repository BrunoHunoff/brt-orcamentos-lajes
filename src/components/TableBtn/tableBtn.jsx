import './tableBtn.css'

function TableBtn({ btnColor, btnName, id, onClick }) {

    return(
        <div className='table-load-more'>
            <button type='button' style={{background: btnColor}} id={id} onClick={onClick} className='load-btn'>{btnName}</button>
        </div>
    )
}

export default TableBtn