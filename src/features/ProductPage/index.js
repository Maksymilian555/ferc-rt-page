import "./style.css";
import productFoto from "../../common/Images/rocketproduct.jpg"
import { getProductsById } from "../ShopPage/productsSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const scrollInfo = () => {
    const proj = document.getElementById("ProductInfo")

    if (proj) {
        proj.scrollIntoView();
    }
}

function ProductPage() {
    const {id} = useParams()
    const product = useSelector(state => getProductsById(state, id))
    return (
        <>
        <section id="product" className="productSec">
           <img src={productFoto} className="productSec_image"></img>
           <div className="productSec_info">
                <h1 className="productSec_name">{product.name}</h1>
                <h3 className="productSec_price">{`${product.price} złotych`}</h3>
                <h3 className="productSec_avability">{`Dostępny: ${(product.avability && "tak") || "nie"}`}</h3>
                <p className="productSec_description">{product.description}</p>
                <div className="productSec_buttons">
                    <button className="productSec_button productSec_button--online">Kup w sklepie online</button>
                    <button className="productSec_button productSec_button--stationary" onClick={scrollInfo}>Kup w sklepie stacjonarnym</button>
                </div>
                <p id="ProductInfo" className="productSec_moreInfo">Znajdziesz na stoisku stacjonarnym o adresie ... dnia 01.01.2024 w godzinach 12:00-16:00.</p>
           </div>
        </section>
        </>
    );
};

export default ProductPage;