import "./style.css";

function ErrorPage() {

    return (
        <>
        <section id="about" className="errorSec">
            <div className="errorSec_flexMrg">
                <div className="errorSec_secFlex">
                    <div className="errorSec_secText">
                        <h1>Strony nie znaleziono, błąd 404</h1>
                        <p>
                            Jest nam bardzo przykro, ale taka strona nie istnieje. Spróbuj odświeżyć stronę lub sprawdź kod URL i upewnij się, że jesteś na odpowiedniej podstronie. Jeśli faktycznie nie możesz skorzystać ze strony, prosimy o kontakt z obsługą.
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