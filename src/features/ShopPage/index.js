import "./style.css";
import searchIcon from "../../common/Images/searchIcon.jpg"
import { useSelector } from "react-redux";
import { getProductsByCategory, selectProducts, selectProductsByQuery, } from "./productsSlice";
import { NavLink } from "react-router-dom";
import { toProduct } from "../../routes";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import sm from "/FERC/ferc-rt-page/src/features/ShopPage/ProductsImages/1-a.jpg"

function ShopPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");
    const products = useSelector(selectProducts)
    const [Category, setCategory] = useState(null);
    let productsByCategory = useSelector(state => getProductsByCategory(state, Category))
    let productsByQuery = useSelector(state => selectProductsByQuery(state, query))
    let productsSearched =
        productsByQuery &&
        productsByQuery.map(product => (
        <NavLink to={toProduct({id: product.id})} >
        <li key={product.id} className="shopSec_card">
            <img  className="shopSec_cardImg" src="./ProductsImages/1-a.jpg"alt="productImage"></img>
            <img  className="shopSec_cardImg--under" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/1536px-Red_Color.jpg"alt="productImage"></img>
            <h2 className="shopSec_cardName">{product.name}</h2>
            <h3 className="shopSec_cardPrice">{product.price}</h3>
        </li>
        </NavLink>
        ))
    let productsList = 
            Category &&
            productsByCategory.map(product => (
            <NavLink to={toProduct({id: product.id})} >
            <li key={product.id} className="shopSec_card">
                <img  className="shopSec_cardImg" src="./ProductsImages/1-a.jpg"alt="productImage"></img>
                <img  className="shopSec_cardImg--under" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/1536px-Red_Color.jpg"alt="productImage"></img>
                <h2 className="shopSec_cardName">{product.name}</h2>
                <h3 className="shopSec_cardPrice">{product.price}</h3>
            </li>
            </NavLink>
        ))
    const history = useHistory();
    const onSearcherChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete("szukaj");
        }   else {
            searchParams.set("szukaj", target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
    const ImportImg = (id) => {
        const img = import (`../ShopPage/ProductsImages/${id}-a.jpg`)
        return img
    };
    return (
        <>
        <section id="shop" className="shopSec">
            <div className="shopSec_flexMrg">
                <div className="shopSec_secFlex">
                    <div className="shopSec_nav">
                        <h1 className="shopSec_noWrap">Nasz sklep</h1>
                        <div className="shopSec_categories">
                            <h3 className="shopSec_category " onClick={() => setCategory(1)}>Dla dzieci</h3>
                            <h3 className="shopSec_category" onClick={() => setCategory(2)}>Rakiety</h3>
                            <h3 className="shopSec_category" onClick={() => setCategory(3)}>Jedzenie</h3>
                            <h3 className="shopSec_category" onClick={() => setCategory(4)}>Inne</h3>
                        </div>
                        <div className="shopSec_searcher">
                            <input className="shopSec_search" onChange={onSearcherChange} value={query || ""} type="text" placeholder="Wyszukaj..."/>
                            <img className="shopSec_searchIcon" src={searchIcon} alt="search icon"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shopSec_shop">
                <ul className="shopSec_list">
                    {
                    productsSearched || productsList || products.map(product => (
                        <NavLink to={toProduct({id: product.id})} >
                        <li key={product.id} className="shopSec_card">
                            <img  className="shopSec_cardImg" src={"ImportImg(product.id)"}alt="productImage"></img>
                            <img  className="shopSec_cardImg--under" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/1536px-Red_Color.jpg"alt="productImage"></img>
                            <h2 className="shopSec_cardName">{product.name}</h2>
                            <h3 className="shopSec_cardPrice">{product.price}</h3>
                        </li>
                        </NavLink>
                    ))
                    }
                </ul>
            </div>
        </section>
        </>
    );
};

export default ShopPage;