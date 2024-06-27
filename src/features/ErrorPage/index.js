import "./style.css";


function ErrorPage() {



    return (
        <>
        
        <section id="about" className="errorSec">
            <div className="errorSec_flexMrg">
                <div className="errorSec_secArrangement">
                    <div className="errorSec_secText">
                        <h1>Strony nie znaleziono. Błąd 404</h1>
                        <p>
                            Jest nam bardzo przykro, ale taka strona nie istnieje. Spróbuj odświeżyć stronę lub sprawdź adres URL i upewnij się, że jesteś na odpowiedniej podstronie, lub skontaktuj się z obsługą.
                        </p>
                    </div>
                    <div className="errorSec_gap"></div>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default ErrorPage;