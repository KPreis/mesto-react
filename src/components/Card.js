import React from 'react';
function Card({ card, handleCardClick }) {
  return (
    <li className="card" key={card._id}>
      <button className="card__delete" type="button"></button>
      <div className="card__img-container">
        <img
          className="card__img"
          alt={card.name}
          src={card.link}
          onClick={() => handleCardClick(card)}
        />
      </div>
      <div className="card__description">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-block">
          <button className="card__like" type="button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
