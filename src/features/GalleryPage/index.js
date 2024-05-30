import "./style.css";
import foto from "../../common/Images/Img1.png"

function GalleryPage() {

    return (
        <>
        <section id="about" className="gallerySec">
            <div className="gallerySec_flexMrg">
                <div className="gallerySec_secFlex">
                    <div className="gallerySec_secText">
                        <h1>Nasze zdjęcia</h1>
                        <p className="gallerySec_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <div className="gallerySec_gallery">
                <div className="gallery_row">
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                </div>
                <div className="gallery_row">
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                </div>
                <div className="gallery_row">
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={foto} alt="Zdjęcie rakiety"/>   
                </div>
            </div>
        </section>
        </>
    );
};

export default GalleryPage;