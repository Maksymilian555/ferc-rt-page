import React from "react";
import "./style2.css"

const MultiCardCarousel = () => {
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
  if(currentIndex>cards.length-4) {
    setCurrentIndex(0)
  }
    return (
      <div className="carousel">
        <div className="carousel_width ">
          <div className="carousel_relativeBox"> 
            <div className="carousel_flex">
              {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
                <div className="carousel_card" key={index}>
                  <img className="carousel_image" src={card.image} alt="Card" />
                  <h3 className="carousel_title">{card.title}</h3>
                  <p className="carousel_description">{card.description}</p>
                </div>
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