import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"} className="link">
                <p>Home</p>
            </Link>
            <Link to={"/category/bigStuff"} className="link">
                <p>Big Stuff</p>
            </Link>
            <Link to={"/category/mediumStuff"} className="link">
                <p>Medium Stuff</p>
            </Link>
            <Link to={"/category/smallStuff"} className="link">
                <p>Small Stuff</p>
            </Link>
        </nav>
    );
};
export default Navbar;