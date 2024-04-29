import "./style.css";
import Img1 from "../../../common/Images/Img1.1.png"

const firstSec = {
    backgroundImage: `url(${Img1})`,
};

const Sec1 = () => (
    <section id="about" className="headSec" style={firstSec}>
            <div className="headSec_flexMrg">
                <div className="headSec_secFlex">
                    <div className="headSec_secText">
                        <h1>Nagłówek</h1>
                        <p>
                            Jakiś tam mały text
                        </p>
                    </div>
                    <div className="headSec_gap"></div>
                </div>
            </div>  
    </section>
);

export default Sec1;