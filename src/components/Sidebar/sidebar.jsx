import AddCircle from "../../components/Icons/Add";
import Clipboard from "../../components/Icons/Clipboard";
import People from "../../components/Icons/Clients";
import "./sidebar.css";

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
            <button className="sidebar-btn">
              <AddCircle className='sidebar-icon'/>
              <span>Novo orçamento</span>
            </button>
          </li>
          <li>
            <button className="sidebar-btn">
              <Clipboard className='sidebar-icon'/>
              <span>Orçamentos</span>
            </button>
          </li>
          <li>
            <button className="sidebar-btn">
              <People className='sidebar-icon'/>
              <span>Clientes</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
