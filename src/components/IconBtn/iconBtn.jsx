import './iconBtn.css'

function IconBtn( {btnName, btnIcon,btnClass } ) {
    return(
        <div className='btn-container'>
            <button className={ `icon-btn ${btnClass}`}>
                {btnIcon}
                <span>{btnName}</span>
            </button>
        </div>
    )
}

export default IconBtn