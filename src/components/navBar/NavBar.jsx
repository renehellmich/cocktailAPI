import "./navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (<>
        <div className="navContainer">
            <p className="logo">Drinks&Chill</p>
            <nav><Link to="/"><p className="nav">Home</p></Link></nav>
        </div>


    </>);
}

export default NavBar;
