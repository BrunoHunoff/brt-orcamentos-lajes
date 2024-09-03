import AddCircle from "../../assets/add_circle.svg";
import Clipboard from "../../assets/Clipboard.svg";
import People from "../../assets/gmail_groups.svg";
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
            <button>
              <img src={AddCircle} />
              <span>Novo orçamento</span>
            </button>
          </li>
          <li>
            <button type="">
              <img src={Clipboard} />
              <span>Orçamentos</span>
            </button>
          </li>
          <li>
            <button>
              <img src={People} />
              <span>Clientes</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
