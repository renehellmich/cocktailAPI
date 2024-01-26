import SearchBar from "../searchBar/SearchBar";
import "./header.css"
const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <h1>Cocktails &  Getränke!</h1>
                <p className="wellcomeTag">Herzlich Willkommen in der Welt der Cocktails und Getränke!
                </p>
            <SearchBar />
            </div>

        </>
    );
}

export default Header;