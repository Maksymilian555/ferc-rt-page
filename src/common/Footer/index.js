import "./style.css";
import Discord from "../Images/Discord.png"
import fb from "../Images/Facebook.png"
import inst from "../Images/Instagram.png"
import twit from "../Images/Twitter.png"
import yt from "../Images/YouTube.png"

const scrollProj = () => {
    const proj = document.getElementById("projects")

    if (proj) {
        proj.scrollIntoView();
    }
}
const scrollGal = () => {
    const proj = document.getElementById("galery")

    if (proj) {
        proj.scrollIntoView();
    }
}
const scrollAbo = () => {
    const proj = document.getElementById("about")

    if (proj) {
        proj.scrollIntoView();
    }
}
const scrollConc = () => {
    const proj = document.getElementById("contact")

    if (proj) {
        proj.scrollIntoView();
    }
}

const Footer = () => (
    <section id="contact" className="footer">
        <div className="footer_main">
            <div>
                <h4>Flat Earth Rocket Corporation</h4>
                <p className="footer_littleText">Staramy się pokazać innym, że można osiągnąć niemożliwe, a robimy to: sięgając aż w kosmos!</p>
            </div>
            <div>
                <ul className="footer_pageMap">
                    <li>
                        <button className="footer_mapButton" onClick={scrollAbo}>O nas</button>
                        <button className="footer_mapButton" onClick={scrollGal}>Galeria</button>
                        <button className="footer_mapButton" onClick={scrollProj}>Projekty</button>
                        <button className="footer_mapButton" onClick={scrollConc}>Kontakt</button>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Kontakt</h4>
                <p>
                   <a href="https://discord.gg/H7Cdx4uRps"><img className="footer_mediaButton" src={Discord} alt="Discord Button"></img></a> 
                   <a href="https://www.instagram.com/flat_earth_rocket_corporation/"><img className="footer_mediaButton" src={inst} alt="Instagram Button"></img></a> 
                   <a href="https://twitter.com/FERC_rt"><img className="footer_mediaButton" src={twit} alt="X Button"></img></a> 
                   <a href="https://www.facebook.com/profile.php?id=61557533082625"><img className="footer_mediaButton" src={fb} alt="Facebook Button"></img></a> 
                   <a href="https://www.youtube.com/channel/UCkZDK-OkrcC78p6HOeGSnbw"><img className="footer_mediaButton" src={yt} alt="Youtube Button"></img></a> 
                </p>
            </div>   
        </div>
        <div className="footer_info">
            <p>
                Copyright Maksymilian Gozdek©
            </p>
        </div>
    </section>
)

export default Footer;