import { Link } from 'react-router-dom'

function DropdownSubmenuitem(props) {
    return (
        <>
            <li>
                <Link to="/card-production/add-application">
                    <i className="bi bi-circle"></i><span>{props.submenu.title}</span>
                </Link>
            </li><li>
                <Link to="/card-production/process-application">
                    <i className="bi bi-circle"></i><span>Process Application</span>
                </Link>
            </li>
        </>
    )
}

export default DropdownSubmenuitem