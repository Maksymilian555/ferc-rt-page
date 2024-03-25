import "./style.css";
import Img1 from "../Images/Img1.1.png"


const firstSec = {
    backgroundImage: `url(${Img1})`,
};

const Wrapper = ({ footer }) => (

    <div className="wrapper">
        <section id="about" className="wrapper_sec wrapper_sec--imageS" style={firstSec}>
            <div className="wrapper_flexMrg">
                <div className="wrapper_secFlex">
                    <div className="wrapper_secText">
                        <h1>Nagłówek</h1>
                        <p>
                            Jakiś tam mały text
                        </p>
                    </div>
                    <div className="wrapper_gap"></div>
                </div>
            </div>  
        </section>
        <section id="galery" className="wrapper_sec" style={firstSec}>
            <div className="wrapper_flexMrg">
                <div className="wrapper_secFlex">
                    <div className="wrapper_secText">
                        <h1>Piękna sekcja z obrazem</h1>
                        <p>
                            Nieco więcej textu i oczywiście buttony 
                        </p>
                    </div>
                    <div className="wrapper_gap"></div>
                </div>
            </div>  
        </section>
        <section id="projects" className="wrapper_sec wrapper_sec--justCent">
            <div className="wrapper_secMargin">
                <div className="wrapper_secHead">
                    <h2>Fajny tytulik</h2>
                </div>
                <div className="wrapper_secContent">
                    <div className="wrapper_secGraphs">
                        Jakieś duże rzeczy z obrazkami
                    </div>
                    <div className="wrapper_secFooter">
                        Małe rzeczy z małymi obrazkami albo bez
                    </div>
                </div>
            </div>
        </section>
        <>
        {footer}
        </>
    </div>
);

export default Wrapper;