import "./style.css";
import logov2 from "../Images/logov2.png"
import { NavLink } from "react-router-dom";
import { toGallery, toMainPage, toShop } from "../../routes";

const Header = () => {

    return (
        <div className="header"> 
            <ul className="nav_list">
                <li className="nav_case">
                <NavLink
                        to={toMainPage()}
                        activeClassName="active"
                    ><img src={logov2} alt="logo" className="nav_logo"></img>
                </NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to={toMainPage()}
                        activeClassName="active"
                        className="nav_button"
                    >Strona Główna</NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to={toGallery()}
                        activeClassName="active"
                        className="nav_button"
                    >Galeria</NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to={toShop()}
                        activeClassName="active"
                        className="nav_button"
                    >Sklep</NavLink>
                </li>
            </ul>
        </div>
    );
};
export default Header;