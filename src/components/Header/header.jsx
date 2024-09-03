import './header.css'
import User from '../Icons/user'
import ArrowDropDown from '../Icons/ArrowDropDown'

function Header(props) {

    return (
        <div className="header">
            <h1 className='header-title'>{props.pageTitle}</h1>

            <button className='user-button'>
                <User className='header-icon'/>
                <span>{props.userName}</span>
                <ArrowDropDown className='header-icon'/>
            </button>
        </div>
    )
}

export default Header