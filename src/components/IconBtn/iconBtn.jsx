import './iconBtn.css'

function IconBtn( {btnName, btnIcon,btnClass, onClick } ) {
    return(
        <div className='btn-container'>
            <button onClick={onClick} className={ `icon-btn ${btnClass}`}>
                {btnIcon}
                <span>{btnName}</span>
            </button>
        </div>
    )
}

export default IconBtn