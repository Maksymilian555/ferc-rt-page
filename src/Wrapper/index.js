import "./style.css";
import Img1 from "../Images/Img1.1.png"


const firstSec = {
    backgroundImage: `url(${Img1})`,
};

const Wrapper = (props) => (

    <div className="wrapper">
        <section className="wrapper_sec" style={firstSec}>
            <div className="wrapper_flexMrg">
                <div className="wrapper_secFlex">
                    <div className="wrapper_secText">
                        <h1>Jak to się zaczęło</h1>
                        <p>
                            Nasza firma powstała dość dawno jak na wiek twórców...
                        </p>
                    </div>
                    <div className="wrapper_gap"></div>
                </div>
            </div>  
        </section>
        <section className="wrapper_sec" style={firstSec}>
            <div className="wrapper_flexMrg">
                <div className="wrapper_secFlex">
                    <div className="wrapper_secText">
                        <h1>było to dawno</h1>
                        <p>
                            Nasza firma powstała dość dawno jak na wiek twórców...
                            Lorem
                        </p>
                    </div>
                    <div className="wrapper_gap"></div>
                </div>
            </div>  
        </section>
    </div>
);

export default Wrapper;