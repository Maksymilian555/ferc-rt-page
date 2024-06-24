import "./style.css";
import fb from "../Images/Facebook.png"
import inst from "../Images/Instagram.png"
import twit from "../Images/Twitter.png"
import yt from "../Images/YouTube.png"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { toGallery, toShop } from "../../routes";



 const Footer = () => {



    const Scroll = (id) => {
        const target = document.getElementById(id)
        if (target) {
            target.scrollIntoView();
        }
    };

    return (
        
    <section id="contact" className="footer">
        <div className="footer_main">
            <div>
                <h4>Flat Earth Rocket Corporation</h4>
                <p className="footer_littleText">Staramy się pokazać innym, że można osiągnąć niemożliwe, a robimy to: sięgając aż w kosmos!</p>
            </div>
            <div>
                <ul className="footer_pageMap">
                    <li className="footer_mapCase">
                        <button className="footer_mapButton" onClick={() => Scroll("about>O nas")}></button>
                    </li>

                    <li className="footer_mapCase">
                        <button className="footer_mapButton" onClick={() => Scroll("shop>Wystawa")}></button>
                        </li>
                        <li className="footer_mapCase">
                        <button className="footer_mapButton" onClick={() => Scroll("projects>Projekty")}></button>
                        </li>
                        <li className="footer_mapCase">
                        <button className="footer_mapButton" onClick={() => Scroll("contact>Kontakt")}></button>
                    </li>
                    <li className="footer_mapCase">
                        <NavLink to={toShop()} className="footer_navLink"><button className="footer_mapButton" >Sklep</button></NavLink>
                        </li>
                        <li className="footer_mapCase">
                        <NavLink to={toGallery()} className="footer_navLink"><button className="footer_mapButton" >Galeria</button></NavLink>
                        </li>
                        <li className="footer_mapCase">
                        <button className="footer_mapButton" onClick={() => Scroll("yt>Youtube")}></button>
                        </li>
                        <li className="footer_mapCase">
                        <button className="footer_mapButton" onClick={() => Scroll("news>Wydarzenia")}></button>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Kontakt</h4>
                <p>
                   <a href="https://www.instagram.com/flat_earth_rocket_corporation/"><img className="footer_mediaButton" src={inst} alt="Instagram Button"></img></a> 
                   <a href="https://twitter.com/FERC_rt"><img className="footer_mediaButton" src={twit} alt="X Button"></img></a> 
                   <a href="https://www.facebook.com/profile.php?id=61557533082625"><img className="footer_mediaButton" src={fb} alt="Facebook Button"></img></a> 
                   <a href="https://www.youtube.com/channel/UCkZDK-OkrcC78p6HOeGSnbw"><img className="footer_mediaButton" src={yt} alt="Youtube Button"></img></a> 
                </p>
            </div>   
        </div>
        <div className="footer_info">
            <p>
                Copyright © Flat Earth Rocket Corporation 2024
            </p>
        </div>
    </section>
    
    );
};

export default Footer;