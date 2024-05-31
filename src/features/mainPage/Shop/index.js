import "./style.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import MultiCardCarousel from "./index2.js";


const Sec3 = () => {
    const shopRef = useRef(null);
    return (
    <section ref={shopRef} id="shop" className="shop_sec shop_sec--justCent">
    <div className="shop_secMargin">
        <div className="shop_secHead">
                    <NavLink
                        to="/Sklep"
                        activeClassName="active"
                        className="shop_shopLink"
                    ><h2>Nasze produkty</h2></NavLink>
        </div>
        <div className="shop_secContent">
            <MultiCardCarousel/>
        </div>
    </div>
    </section>
);
};

export default Sec3;