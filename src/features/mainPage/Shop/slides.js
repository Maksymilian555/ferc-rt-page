import "./slider.css"
import arrow from "./Images/arrow.png"
import card1 from "./Images/card1.jpg"

const Slider = () => {
  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  
  productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
      })
  
      preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
      })
  })
    return (
      <section className="product"> 
      <h2 className="product-category">W super cenie</h2>
      <button className="pre-btn"><img src={arrow} alt=""/></button>
      <button className="nxt-btn"><img src={arrow} alt=""/></button>
      <div className="product-container">
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src={card1} className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src={card1} className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src={card1} className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src={card1} className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src={card1} className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src="../Images/card6.jpg" className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src="../Images/card7.jpg" className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src={card1} className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src="../Images/card9.jpg" className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
              <div className="product-image">
                  <span className="discount-tag">50% off</span>
                  <img src={card1} className="product-thumb" alt=""/>
                  <button className="card-btn">No dalej!</button>
              </div>
              <div className="product-info">
                  <h2 className="product-brand">Supcio produkt</h2>
                  <p className="product-short-description">Nie czekaj, to the best rocket</p>
                  <span className="price">10 PLN</span><span className="actual-price">$40</span>
              </div>
          </div>
          <div className="product-card">
             <button className="goToShopButton">Przejdź do sklepu!</button>
          </div>
      </div>
  </section>
    );
};

export default Slider;