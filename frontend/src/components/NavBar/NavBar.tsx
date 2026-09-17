import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
    return(
        <nav className="navbar-section">
            <h1 className='navbar-title'>GALA</h1>
            <div className="navbar-links">
                <Link to={"/"}><p>Inicio</p></Link>
                <Link to={"/about"}><p>Agenda</p></Link>
                <Link to={"/classes"}><p>Clases</p></Link>
                <Link to={"/contact"}><p>Contacto</p></Link>
            </div>
        </nav>
    )
}