import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/category/bigStuff"}>
                <p>Big Stuff</p>
            </Link>
            <Link to={"/category/mediumStuff"}>
                <p>Medium Stuff</p>
            </Link>
            <Link to={"/category/smallStuff"}>
                <p>Small Stuff</p>
            </Link>
        </nav>
    );
};
export default Navbar;