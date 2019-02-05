import React from 'react';
import Card from './Card';

import './List.css';

function List (props) {

  const CardList = props.cards.map((card) => {

    return (
      <Card title={card.title} content={card.content} key={card.key} />
    );
  });

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">{CardList}</div>
    </section>
  );
}

export default List;
