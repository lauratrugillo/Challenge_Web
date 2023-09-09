import { Link } from "react-router-dom"
import logo from '../img/logo.png';

export default function Menu(){

    return(
        <nav>
            <Link to='/'><img src={logo} id='logo' /></Link>                        
            <Link to='/seguro'>Seguro</Link>
            <span> | </span>
            <Link to='/duvidas'>Dúvidas</Link>
            <span> | </span>
            <Link to='/integrantes'>Integrantes</Link>
        </nav>
    )
}