import AddCircle from "../../components/Icons/Add";
import Clipboard from "../../components/Icons/Clipboard";
import People from "../../components/Icons/Clients";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    const companyName = "BRT"

  return (
    <div className="sidebar">

      <div className="logo-container">
          <a >
              <h2 className="sidebar-logo">{companyName}</h2>
          </a>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to='/orcamento' className="sidebar-btn">
              <AddCircle className='sidebar-icon'/>
              <span>Novo orçamento</span>
            </Link>
          </li>
          <li>
            <Link to='/' className="sidebar-btn">
              <Clipboard className='sidebar-icon'/>
              <span>Orçamentos</span>
            </Link>
          </li>
          <li>
            <Link to='/clientes' className="sidebar-btn">
              <People className='sidebar-icon'/>
              <span>Clientes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
