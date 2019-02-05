import React from 'react';
import List from './List';

import './App.css';

function App (props) {

  // Create an array of List components
  const Lists = props.store.lists.map((list) => {

    const key    = list.id;
    const header = list.header;

    const cardInfo = list.cardIds.map((id) => {

      return {
        key     : id,
        title   : props.store.allCards[id].title,
        content : props.store.allCards[id].content,
      };
    });

    return (
      <List header={header} cards={cardInfo} key={key} />
    );
  });

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">{Lists}</div>
    </main>
  );
}

export default App;
