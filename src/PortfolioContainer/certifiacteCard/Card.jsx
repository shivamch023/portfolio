import React from 'react';

const Card = ({ id, imageUrl, text, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={imageUrl} alt={text} />
      {/* <p>{text}</p> */}
    </div>
  );
};

export default Card;
