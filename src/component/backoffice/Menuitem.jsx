import { Link } from 'react-router-dom'

function Menuitem(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link " to="/">
                <i className="bi bi-grid"></i>
                <span>{props.title.heading}</span>
            </Link>
        </li>
    )
}

export default Menuitem