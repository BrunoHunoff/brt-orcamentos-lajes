import './linkBtn.css'
import { Link } from "react-router-dom";
import { OrcamentoContext } from '../../contexts/OrcamentoContext';
import { useContext, useState } from 'react';

function LinkBtn( { btnName, btnColor, linkTo } ) {

    const resetState = useContext(OrcamentoContext)

    const [confirm, setConfirm] = useState(false)

    return (
        <div className='link-btn-container'>
            <Link style={{background:btnColor}} className='link-btn' onClick={resetState} to={linkTo}>{btnName}</Link>
        </div>
    )
}

export default LinkBtn