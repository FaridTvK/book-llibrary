import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return ( 
        <header className="header">
            <h1>Little Project</h1>

            <div className="navbar">
                <nav>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="add" activeClassName="active">Add</NavLink>
                    {/* <NavLink to={"/favourite"}>Favourite Books</NavLink> */}
                </nav>
            </div>
        </header>
     );
}
 
export default Header;
