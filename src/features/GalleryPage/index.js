import "./style.css";

function GalleryPage() {



    return (
        
        <section id="about" className="gallerySec">
            <div className="gallerySec_flexMrg">
                <div className="gallerySec_secFlex">
                    <div className="gallerySec_secText">
                        <h1>Nasze zdjęcia</h1>
                        <p className="gallerySec_paragraph">Zobacz nasze zdjęcia, które przedstawiają dużą część naszej pracy znacznie lepiej niż słowa. Mamy nadzieję, że z czasem to miejsce rozrośnie się, a także zostanie prawdziwą kopalnią wiedzy o naszej firmie.</p>
                    </div>
                </div>
            </div>
            <div className="gallerySec_gallery">
                <div className="gallery_row">
                    <img className="gallery_photo" src={require(`../../Images/2-b.jpg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo gallery_photo--big" src={require(`../../Images/4-b.jpg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={require(`../../Images/6-a.jpg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo gallery_photo--big" src={require(`../../Images/3-a.jpg`)} alt="Zdjęcie rakiety"/>
                </div>
                <div className="gallery_row">
                    <img className="gallery_photo gallery_photo--big" src={require(`../../Images/icon.jpg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo " src={require(`../../Images/9-b.jpg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo gallery_photo--big" src={require(`../../Images/2-b.jpg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={require(`../../Images/1-b.jpg`)} alt="Zdjęcie rakiety"/>
                </div>
                <div className="gallery_row">
                    <img className="gallery_photo" src={require(`../../Images/Earth.jpeg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo gallery_photo--big" src={require(`../../Images/Img1.png`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo" src={require(`../../Images/rocketproduct.jpg`)} alt="Zdjęcie rakiety"/>
                    <img className="gallery_photo gallery_photo--big" src={require(`../../Images/5-a.jpg`)} alt="Zdjęcie rakiety"/>   
                </div>
            </div>
        </section>
        
    );
};

export default GalleryPage;