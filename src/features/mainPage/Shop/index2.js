import React from "react";
import "./style2.css"
import { useSelector } from "react-redux";
import { selectProducts } from "../../ShopPage/productsSlice";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { toProduct } from "../../../routes";



const MultiCardCarousel = () => {
  const productsInLine = 4
  const products = useSelector(selectProducts)
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const cards = [
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 1',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 2',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 3',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 4',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 5',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 6',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 7',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 8',
        description: 'Info which directs to the other page.',
      },
      {
        image: 'https://dummyimage.com/300.png/09f/fff',
        title: 'Card 9',
        description: 'Info which directs to the other page.',
      },
    ];
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };
  if(currentIndex>cards.length-productsInLine) {
    setCurrentIndex(0)
  }
    return (
      <div className="carousel">
        <div className="carousel_width ">
          <div className="carousel_relativeBox"> 
            <div className="carousel_flex">
              {products.slice(currentIndex, currentIndex + productsInLine).map((product, index) => (
                <NavLink className="carousel_card" to={toProduct({id: product.id})} >
                  <div  key={index}>
                  <img className="carousel_image" src={require(`../../ShopPage/ProductsImages/${product.id}-a.jpg`)} alt="Card" />
                  <h3 className="carousel_title">{product.name}</h3>
                </div>
                </NavLink>
              ))}
            </div>
            <div className="carousel_arrows">
              <button className="carousel_arrow" onClick={handlePrev}></button>
              <button className="carousel_arrow carousel_arrow--left" onClick={handleNext}></button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MultiCardCarousel;