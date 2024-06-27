import "./style.css";
import Img1 from "../../../common/Images/Img1.1.png"



const firstSec = {
    backgroundImage: `url(${Img1})`,
};

function Sec1() {


    
    return (
        
    <section id="projects" className="headSec" style={firstSec}>
            <div className="headSec_flexMrg">
                <div className="headSec_secFlex">
                    <div className="headSec_secText">
                        <p></p>
                        <h1>Dowiedz się o nas więcej</h1>
                        <p>
                            Jeśli zainteresowało cię to co robimy, zajrzyj niżej i sprawdź nasz media społecznościowe, aby zawsze być na bieżąco. Możesz także podjąć z nami kontakt z użyciem dowolnej podanej platformy, ale także używając adresu email: ferc.rockettechnologies@gmail.com. Możesz również podjąć tam rozmowę w sprawie produktów w naszym sklepie. Do zobaczenia 🖐

                        </p>
                    </div>
                    <div className="headSec_gap"></div>
                </div>
            </div>  
    </section>
    
    );
};

export default Sec1;