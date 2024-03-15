import { Link } from "react-router-dom";
import Menuitem from "./Menuitem";
import DropdownMenuitem from "./DropdownMenuitem";

function Sidebar() {
  const title = { heading: "Dashboard" };
  const dropdowntitle = { heading: "Card Management" };

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-folder"></i> <span>Folder 1</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="tables-general.html">
                <i class="bi bi-file-earmark-text"></i> <span>Document 1</span>
              </a>
            </li>
            <li>
              <a href="tables-data.html">
                <i class="bi bi-file-earmark-text"></i> <span>Document 2</span>
              </a>
            </li>
          </ul>
        </li>{" "}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-folder"></i> <span>FOLDER 2</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="tables-general.html">
                <i class="bi bi-file-earmark-text"></i> <span>Document 1</span>
              </a>
            </li>
            <li>
              <a href="tables-data.html">
                <i class="bi bi-file-earmark-text"></i> <span>Document 2</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-folder"></i> <span>folder 3</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="tables-general.html">
                <i class="bi bi-file-earmark-text"></i> <span>Document 1 </span>
              </a>
            </li>
            <li>
              <a href="tables-data.html">
                <i class="bi bi-file-earmark-text"></i> <span>Document 2</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
