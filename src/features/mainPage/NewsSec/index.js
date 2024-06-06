import "./style.css";

const NewsSec = () => (
    <section id="news" className="newsSec">
            <div className="newsSec_flexMrg">
                <div className="newsSec_secFlex">
                        <h1 className="newsSec_header">Wiadomości</h1>
                        <div className="newsSec_body">
                            <div className="newsSec_mainNews">
                                <h2 className="newsSec_newsName">FERC rozpoczyna swoją działalność</h2>
                            </div>
                            <div className="newsSec_firstBox">
                                <div className="newsSec_mediumNews">
                                    <h2 className="newsSec_newsName">Nowe wpisy na instagramie Flat Earth</h2>
                                </div>
                                <div className="newsSec_secondBox">
                                    <div className="newsSec_smallNews">
                                        <h2 className="newsSec_newsName newsSec_newsName--small">Znika link do discorda</h2>
                                    </div>
                                    <div className="newsSec_smallNews newsSec_smallNews--second">
                                        <h2 className="newsSec_newsName newsSec_newsName--small">Czy strona internetowa przyniesie korzyści firmie?</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>  
    </section>
);

export default NewsSec;