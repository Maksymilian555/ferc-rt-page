import "./style.css";
import Img1 from "../Images/Img1.1.png"

const firstSec = {
    backgroundImage: `url(${Img1})`,
};

const Sec2 = () => (
<section id="galery" className="imgSec_sec" style={firstSec}>
            <div className="imgSec_flexMrg">
                <div className="imgSec_secFlex">
                    <div className="imgSec_secText">
                        <h1>Piękna sekcja z obrazem</h1>
                        <p>
                            Nieco więcej textu i oczywiście buttony 
                        </p>
                    </div>
                    <div className="imgSec_gap"></div>
                </div>
            </div>  
        </section>
);

export default Sec2;