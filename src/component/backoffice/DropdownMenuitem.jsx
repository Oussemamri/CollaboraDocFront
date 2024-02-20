
import DropdownSubmenuitem from './DropdownSubmenuitem';

function DropdownMenuitem(props) {
    const submenuitem = {
        title:"Add Application"
    }
    return (

        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#cardproduction-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-bar-chart"></i><span>{props.dropdowntitle.heading}</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="cardproduction-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <DropdownSubmenuitem submenu={submenuitem}/>
            </ul>
        </li>
    )
}

export default DropdownMenuitem;