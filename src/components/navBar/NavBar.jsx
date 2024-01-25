import { Link } from "react-router-dom";

const NavBar = () => {
    return (<>

        <p className="logo">Drinks&Chill</p>
        <nav><Link to="/"><p className="nav">Home</p></Link></nav>


    </>);
}

export default NavBar;
