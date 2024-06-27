import "./style.css";



const link = "https://www.youtube.com/embed/Jig5iZNDk88?si=f3xvge0oYF9Nsxy-"

function YoutubeSec() {



    return (
    <section id="yt" className="ytSec">
            <div className="ytSec_flexMrg">
                <div className="ytSec_secFlex">
                            <div className="ytSec_filmInfo">
                                <h1 className="ytSec_filmName">Obejrzyj niesamowity start rakiety</h1>
                                <p className="ytSec_description">Czy firma kiedykolwiek dojdzie do takiego etapu, że wystrzeli w kosmos tak wielką masę?.</p>
                                <button className="ytSec_filmLink" onClick={() => window.open(link)}>Zobacz sam!</button>
                            </div>
                            <iframe title="Odpalamy rakietę" className="ytSec_film" width="66%" height="80%" src={link}></iframe>
                </div>
            </div>  
    </section>
    
    );
};

export default YoutubeSec;