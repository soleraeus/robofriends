import React from 'react';
import './Card.css';

const Card = ({username,name, email}) => {
  return (
      <article className="Card">
        <img src={`https://robohash.org/${username}`} alt='portrait' />
          <h2>{name}</h2>
          <p>{email}</p>
      </article>
    );
}

export default Card;
