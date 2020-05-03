import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <article className="Card">
        <img src={`https://robohash.org/${this.props.username}`} alt='portrait' />
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
      </article>
    );
  }
}

export default Card;
