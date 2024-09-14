import './linkBtn.css'
import { Link } from "react-router-dom";

function LinkBtn( { btnName, btnColor, linkTo } ) {

    return (
        <div className='link-btn-container'>
            <Link style={{background:btnColor}} className='link-btn' to={linkTo}>{btnName}</Link>
        </div>
    )
}

export default LinkBtn