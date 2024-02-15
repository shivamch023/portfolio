// src/components/CardContainer.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import './certifiacteCard.css';
import Dca from '../Assets/certificate img/Diploma in computer Aplication.png'
import isp from '../Assets/certificate img/internship.jpeg'
import jquiz from '../Assets/certificate img/Java script basic quiz.jpeg'
import Nipam from '../Assets/certificate img/NIPAM.jpeg'
import resume from '../Assets/certificate img/Shivam(CSE)BRCM.png'
import iit1 from '../Assets/certificate img/Tech nex iit bhu.jpeg'
import iit2 from '../Assets/certificate img/Technex iit bhu.jpeg'
import close_icon from '../Assets/certificate img/close.png'

const cardData = [
    { id: 1, imageUrl: Dca , text: 'Diploma in Computer Application' },

    { id: 2, imageUrl: isp, text: 'Certificate of Intership' },
    { id: 3, imageUrl: jquiz, text: 'Java Script Quiz' },
    { id: 4, imageUrl: Nipam, text: 'National IP Awarness Mission' },
    { id: 5, imageUrl: resume, text: 'My second Resume' },
    { id: 6, imageUrl: iit1, text: 'I AM PARTICIPATE IN TECHNEX 2023 ORGANIZED BY IIT BHU ,Hack-it-Out' },
    { id: 7, imageUrl: iit2, text: 'I AM PARTICIPATE IN TECHNEX 2023 ORGANIZED BY IIT BHU, TreaShawk' },

    
  
];

const CardContainer = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (selectedCard !== null) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedCard]);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    
   <div className='cards'>
    <h2>Certifiactes</h2>
     <div className="card-container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          imageUrl={card.imageUrl}
          onClick={handleCardClick}
        />
      ))}
      {selectedCard && (
        <div className="modal-container" onClick={() => setSelectedCard(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedCard(null)}>
              <img src={close_icon} alt="" />
            </button>
            <img src={cardData.find((card) => card.id === selectedCard).imageUrl} alt="Selected Card" />
            <p>{cardData.find((card) => card.id === selectedCard).text}</p>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default CardContainer;
