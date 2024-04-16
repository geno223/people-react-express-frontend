import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="nav">
            <Link to='/show'>
                <div>People App</div>
            </Link>
        </nav>
    )
}

export default Header;