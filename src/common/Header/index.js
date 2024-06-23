import "./style.css";
import logov2 from "../Images/logov2.png"
import { NavLink } from "react-router-dom";
import { toGallery, toMainPage, toShop } from "../../routes";
import { useTranslation } from 'react-i18next';
import { Suspense } from "react";

const Header = () => {

    const { t, i18n } = useTranslation();

    return (
        <Suspense>
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
                    >{t("Strona Główna")}</NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to={toGallery()}
                        activeClassName="active"
                        className="nav_button"
                    >{t("Galeria")}</NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to={toShop()}
                        activeClassName="active"
                        className="nav_button"
                    >{t("Sklep")}</NavLink>
                </li>
            </ul>
        </div>
        </Suspense>
    );
};
export default Header;