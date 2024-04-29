import "./style.css";
import Earth from "../../../common/Images/Earth.jpeg"

const firstSec = {
    backgroundImage: `url(${Earth})`,
};

const Sec2 = () => (
<section id="galery" className="imgSec_sec" style={firstSec}>
            <div className="imgSec_flexMrg">
                <div className="imgSec_secFlex">
                    <div className="imgSec_secText">
                        <h1>Czym jest FERC?</h1>
                        <p>
                            FERC to skrót od Flat Earth Rocket Corporation, często z dodatkiem Rocket Technologies. Na czym polega nasze działanie? Staramy się pokazać, że każdy ma szansę osiągnąć coś niesamowitego, nawet kilkuletnie dziecko może zrobić coś niemożliwego. Chcemy udowodnić, że najważniejszą wartością jest wiara w sukces i nieustanne dążenie do niego. My realizujemy to próbując osiągnąć wieloletni cel: dotrzeć dalej niż latają samoloty, dalej niż chmury. Chcemy dotrzeć w kosmos.
                        </p>
                    </div>
                    <div className="imgSec_gap"></div>
                </div>
            </div>  
        </section>
);

export default Sec2;