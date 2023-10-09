import "./navBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <NavLink className="navbar-item" to={"/"}>
        HomePage
      </NavLink>

      <NavLink className="navbar-item" to={"/favList"}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default NavBar;
