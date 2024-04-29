import "./style.css";
import Slider from "./slides.js"
import { useRef } from "react";


const Sec3 = () => {
    const shopRef = useRef(null);
    return (
    <section ref={shopRef} id="projects" className="shop_sec shop_sec--justCent">
    <div className="shop_secMargin">
        <div className="shop_secHead">
            <h2>Nasze produkty</h2>
        </div>
        <div className="shop_secContent">
            <Slider/>
        </div>
    </div>
    </section>
);
};

export default Sec3;